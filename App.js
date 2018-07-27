/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './Components/Main/Main';
import Menu from './Components/Main/Menu';
import Authentication from './Components/Authentication/Authentication';
 import OrderHistory from './Components/OrderHistory/OrderHistory';
 import Changeinfo from './Components/Changeinfo/Changeinfo';
 import refreshToken from './Components/api/refreshToken';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Menu: {
      screen: Menu
    },
    Authentication: {
        screen: Authentication,
    },
    Changeinfo: {
      screen: Changeinfo,
    },
    OrderHistory: {
      screen: OrderHistory,
    },
    
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
  }
);
export default class App extends Component {
  componentDidMount() {
    setInterval(refreshToken , 30000);
  }
  render() {
    const { navigation } = this.props;
  return <RootStack navigation={navigation} />;
  }
}
AppRegistry.registerComponent('ShopApp', () => App);
