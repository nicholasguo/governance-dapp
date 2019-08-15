import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BondCard from '../components/Bonds/BondCard';
import { getDeposits } from '../account'

export default class BondsScreen extends React.Component {
  constructor() {
    super()
    this.state = {bonded: [], notified: []}
  }

  async componentDidMount() {
    const cmp = (a, b) => {
      return a.time.cmp(b.time)
    }
    const deposits = await getDeposits('0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95')
    this.setState({ bonded: deposits.bonded.sort(cmp), notified: deposits.notified.sort(cmp)})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.bonded.map((deposit, i) => <BondCard key={i} value={deposit.value} time={deposit.time}/>)}
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
