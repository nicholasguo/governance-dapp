import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const prettyMilliseconds = require('pretty-ms');
import { web3 } from '../../root'


const toGold = (wei) => {
  return web3.utils.fromWei(wei, 'ether')
}


export default class BondCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          { toGold(this.props.value).toString() } Gold bonded with notice period { prettyMilliseconds(this.props.time.toNumber() * 1000, {verbose: true}) } 
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
