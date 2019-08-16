import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const prettyMilliseconds = require('pretty-ms');
import { web3 } from '../../root'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

const toGold = (wei) => {
  return web3.utils.fromWei(wei, 'ether')
}


export default class BondCard extends React.Component {
  render() {
    return (
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text style={styles.noticePeriod}>{ prettyMilliseconds(this.props.time.toNumber() * 1000, {verbose: true}) }</Text>
              <Text style={styles.multiplier}>{ this.props.multiplier.toString() }</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.value}>
                  { toGold(this.props.value).toString() }
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
    )
  };
}

const styles = StyleSheet.create({
  noticePeriod: {
    fontSize: 24,
    textAlign: 'left',
  },
  multiplier: {
    textAlign: 'right',
  },
  value: {
    fontSize: 24,
    textAlign: 'center',
  },
});
