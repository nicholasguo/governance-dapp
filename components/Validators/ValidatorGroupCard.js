import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ValidatorGroupCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {this.props.title}
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginVertical: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 24,
  },
});
