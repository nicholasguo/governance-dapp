import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BondCard extends React.Component {
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
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 24,
  },
});
