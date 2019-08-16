import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import ValidatorCard from './ValidatorCard';

export default class ValidatorGroupInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {group: this.props.group, voted: this.props.voted}
  }
  
  render() {
    voteButtonTitle = this.state.voted ? 'Revoke Vote' : 'Vote'
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.group.name}</Text>
        <Button title={voteButtonTitle} onPress={this.props.onVote} />
        <ScrollView contentContainerStyle={styles.container}>
          {this.state.group.members.map((validator, idx) =>
            <ValidatorCard key={idx} title={validator} />
          )}
        </ScrollView>
      </View>
    )
  };
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      margin: 1,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 15,
      fontSize: 24,
    },
  });