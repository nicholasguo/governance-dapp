import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import BondCard from '../components/Bonds/BondCard';
import AddBond from '../components/Bonds/AddBond';

export default class BondsScreen extends React.Component {
  constructor() {
    super()
    this.state = {items: [], modalVisible: false}
  }

  async componentDidMount() {
    this.setState({items: ['Bond 1', 'Bond 2', 'Bond 3']})
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <AddBond />
        </Modal>
        {this.state.items.map((a, idx) => <BondCard key={idx} title={a}/>)}
      </ScrollView>
    );
  }
}

BondsScreen.navigationOptions = {
  title: 'Bonded Deposits',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});
