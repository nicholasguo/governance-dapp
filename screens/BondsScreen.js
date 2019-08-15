import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BondCard from '../components/Bonds/BondCard';

export default function BondsScreen() {
  // call a bunch of things to fetch data here, feel free to make new
  const items = ['Bond 1', 'Bond 2', 'Bond 3']
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((a, idx) => <BondCard key={idx} title={a}/>)}
    </ScrollView>
  );
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
