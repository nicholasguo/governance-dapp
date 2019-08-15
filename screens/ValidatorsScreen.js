import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ValidatorGroupCard from '../components/Validators/ValidatorGroupCard';
import Swipeout from 'react-native-swipeout'; // 2.1.5

// Buttons
var swipeoutBtns = [
  {
    text: 'Info'
  },
  {
    text: 'Vote',
    onPress: vote
  }
]

function vote() {
  console.log('vote')
}

const items = ['ValidatorGroup 1', 'ValidatorGroup 2', 'ValidatorGroup 3']

export default class ValidatorsScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {items.map((a, idx) =>
        <Swipeout key={idx} right={swipeoutBtns}>
          <ValidatorGroupCard title={a}/>
        </Swipeout>)
      }
    </ScrollView>
    );
  }
}

ValidatorsScreen.navigationOptions = {
  title: 'Validators',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});
