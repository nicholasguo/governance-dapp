import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class ValidatorCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
});
