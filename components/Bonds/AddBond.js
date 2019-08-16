import React from 'react';
import { Button, Slider, Text, TextInput, View, StyleSheet } from 'react-native';
const prettyMilliseconds = require('pretty-ms');
import { deposit } from '../../account'
// import Slider from '@react-native-community/slider';

const second = 1
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour
const year = 365 * day
const notifyPeriods = [0, day, 5 * day, 30 * day, 90 * day, year]

export default class AddBond extends React.Component {
  
  constructor() {
    super()
    this.state = {noticePeriodIndex: 0, amount: ''}
  }

  bond = async () => {
    await deposit(parseInt(this.state.amount), notifyPeriods[this.state.noticePeriodIndex])
    this.setState({noticePeriodIndex: 0, amount: ''})
    this.props.toggle()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Bond a New Deposit</Text>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            keyboardType="numeric"
            onChangeText={(amount) => this.setState({amount})}
            value={this.state.amount}
          />
          <Text style={styles.text}>
            {this.state.noticePeriodIndex && prettyMilliseconds(1000 * notifyPeriods[this.state.noticePeriodIndex], {verbose: true})}
          </Text>
          <Slider
            style={{width: 200, height: 40}}
            step={1}
            minimumValue={0}
            maximumValue={5}
            onValueChange={value => this.setState({noticePeriodIndex: value})}
          />
          <Button title="bond" onPress={this.bond}/>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({  
  container: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});