import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ValidatorsScreen from '../screens/ValidatorsScreen';
import BondsScreen from '../screens/BondsScreen';
import BondScreen from '../screens/BondScreen';
import GovernanceScreen from '../screens/GovernanceScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const ValidatorsStack = createStackNavigator(
  {
    Validators: ValidatorsScreen,
  },
  config
);

ValidatorsStack.navigationOptions = {
  tabBarLabel: 'Validators',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

const BondsStack = createStackNavigator(
  {
    Bonds: BondsScreen,
    Bond: BondScreen,
  },
  config
);

BondsStack.navigationOptions = {
  tabBarLabel: 'Bonds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

BondsStack.path = '';

const GovernanceStack = createStackNavigator(
  {
    Governance: GovernanceScreen,
  },
  config
);

GovernanceStack.navigationOptions = {
  tabBarLabel: 'Governance',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

GovernanceStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  BondsStack,
  ValidatorsStack,
  GovernanceStack,
});

tabNavigator.path = '';

export default tabNavigator;
