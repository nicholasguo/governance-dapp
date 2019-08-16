import React from 'react';
import {Text, View, ScrollView, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import BondCard from '../components/Bonds/BondCard';
import { getDeposits, getDepositMultiplier } from '../account'
import AddBond from '../components/Bonds/AddBond';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
Button,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

export default class BondScreen extends React.Component {
  constructor() {
    super()
    this.state = {bonded: [], notified: [], modalVisible: false}
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder style={{ backgroundColor: "#FFF" }}>
          <BondCard key={0} value={this.props.navigation.getParam('value')} time={this.props.navigation.getParam('time')} multiplier={this.props.navigation.getParam('multiplier')}/>
          <Button block success >
            <Text>Increase</Text>
          </Button>
          <Button block danger >
            <Text>Notify</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

BondScreen.navigationOptions = {
  title: 'Bonded Deposit',
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
