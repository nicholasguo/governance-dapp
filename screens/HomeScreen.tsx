import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Button,
  Icon,
  FooterTab,
  Body,
  Title,
  Right,
  Form,
  Item,
  Input,
  Label,
  List,
  ListItem
} from "native-base";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { requestAccountAddress } from "@celo/dappkit";
import { MonoText } from '../components/StyledText';
import { Linking } from 'expo';
import { getDeposits } from '../account'
import { accountAddress } from '../root'
import BN from 'bn.js'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetchDeposits = async (account: string) => {
    this.setState({ deposits: await getDeposits('0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95') });
  };

  renderDepositList = () => {
    if (!this.state.deposits || this.state.deposits.bonded.length == 0) {
      return (
        <Item>
          <Text>No deposits.</Text>
          <Text>Account is {accountAddress}</Text>
        </Item>
      );
    }

    const deposits = this.state.deposits.bonded.map((deposit, index) => (
      <ListItem avatar key={index}>
        <Left />
        <Body>
          <Text>
						{accountAddress}
          </Text>
          <Text>
            Bonded Deposit, value: {deposit.value.toString()}, time: {deposit.time.toString()}
          </Text>
        </Body>
        <Right />
      </ListItem>
    ));

    return <List>{deposits}</List>;
  }

  componentDidMount = async () => {
    console.log(accountAddress)
    await this.fetchDeposits(accountAddress)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/**
           * Go ahead and delete ExpoLinksView and replace it with your content;
           * we just wanted to provide you with some helpful links.
           */}
          <Form style={styles.form}>
            <Item stackedLabel>
              <Label>Deposits</Label>
            </Item>

            {this.renderDepositList()}
          </Form>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  requestAccountAddress({
    callback: Linking.makeUrl('/home/test'),
    requestId: 'test',
    dappName: 'My Dapps'
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
