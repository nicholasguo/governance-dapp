import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BondCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.title}
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});