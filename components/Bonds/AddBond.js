import React from 'react';
import { Slider, Text, TextInput, View, StyleSheet } from 'react-native';
// import Slider from '@react-native-community/slider';

export default class AddBond extends React.Component {
  
  constructor() {
    super()
    this.state = {noticePeriodIndex: 0, amount: 0}
  }
  render() {
    const notifyPeriods = []
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
            {this.state.noticePeriodIndex && this.state.noticePeriodIndex.toFixed(3)}
          </Text>
          <Slider
            style={{width: 200, height: 40}}
            step={1}
            minimumValue={0}
            maximumValue={6}
            onValueChange={value => this.setState({noticePeriodIndex: value})}
          />
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