import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import ValidatorGroupCard from '../components/Validators/ValidatorGroupCard';
import ValidatorGroupInfo from '../components/Validators/ValidatorGroupInfo';
import { getValidatorGroups, revokeVote, vote } from '../account'

export default class ValidatorsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groups: [], viewGroup: -1, voteGroup: -1};
  }

  async componentDidMount() {
    const cmp = (a, b) => {
      return a.name.cmp(b.name)
    }
    // Get validator groups
    const validatorGroups = await getValidatorGroups()
    this.setState({ groups: validatorGroups.sort(cmp) })
  }

  async switchVote() {
    newVote = this.state.viewGroup != this.state.voteGroup
    if (this.state.voteGroup != -1) {
      await revokeVote()
    }
    if (newVote) {
      await vote(this.state.groups[this.state.viewGroup].address)
    }
    this.setState({ viewGroup: -1, voteGroup: newVote ? this.state.viewGroup : -1 });
  }

  toggleGroup(idx) {
    this.setState({ viewGroup: idx });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Modal
          isVisible={this.state.viewGroup != -1}
          onBackdropPress={() => this.setState({ viewGroup: -1 })}>
          <ValidatorGroupInfo
            group={this.state.groups[this.state.viewGroup]}
            onVote={() => this.switchVote()}
            voted={this.state.viewGroup == this.state.voteGroup} />
        </Modal>
        {this.state.groups.map((group, idx) =>
          <ValidatorGroupCard key={idx} title={group.name} voted={idx == this.state.voteGroup} onPress={() => this.toggleGroup(idx)}/>
        )}
      </ScrollView>
    );
  }
}

ValidatorsScreen.navigationOptions = {
  title: 'Validators',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});
