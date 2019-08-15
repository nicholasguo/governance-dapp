import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BondCard from '../components/Bonds/BondCard';

export default class BondsScreen extends React.Component {
  constructor() {
    super()
    this.state = {items: []}
  }

  async componentDidMount() {
    this.setState({items: ['Bond 1', 'Bond 2', 'Bond 3']})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.items.map((a, idx) => <BondCard key={idx} title={a}/>)}
      </ScrollView>
    );
  }
}

BondsScreen.navigationOptions = {
  title: 'Bonded Deposits',
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
