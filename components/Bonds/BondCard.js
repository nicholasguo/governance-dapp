import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BondCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          BondCard
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});