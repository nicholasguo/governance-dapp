import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import BondCard from '../components/Bonds/BondCard';
import { getDeposits, getDepositMultiplier } from '../account'
import AddBond from '../components/Bonds/AddBond';
import { deposit } from '../account'

export default class BondsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bonded: [], notified: [], modalVisible: false}
  }

  async componentDidMount() {
    const cmp = (a, b) => {
      return a.time.cmp(b.time)
    }
    const deposits = await getDeposits('0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95')
    const bondedWithMultipliers = await Promise.all(deposits.bonded.map(async (deposit) => {
      return { ...deposit, multiplier: await getDepositMultiplier(deposit.value, deposit.time) }}))
    this.setState({ bonded: bondedWithMultipliers.sort(cmp), notified: deposits.notified.sort(cmp)})
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  renderBondedDepositsList = () => {
    if (this.state.bonded) {
      return this.state.bonded.map((deposit, i) => <BondCard key={i} value={deposit.value} time={deposit.time} multiplier={deposit.multiplier} navigation={this.props.navigation}/>)
    } else { 
      return (<Text>You currently have no bonds</Text>)
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <AddBond />
        </Modal>
      {this.renderBondedDepositsList()}
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
