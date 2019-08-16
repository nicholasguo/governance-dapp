import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ValidatorGroupCard extends React.Component {
  render() {
    return (
      <TouchableOpacity style={this.props.voted ? [styles.container, styles.voted]: styles.container} onPress={this.props.onPress}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 1,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
  },
  voted: {
    borderWidth: 5,
  }
});
