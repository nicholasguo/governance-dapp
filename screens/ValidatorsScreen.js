import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ValidatorsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        <ExpoLinksView />
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
