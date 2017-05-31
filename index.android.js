import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from './root';

import { StackNavigator  } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome', header: null
  };
  render() {
    return <Root />;
  }

}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen  },
});

AppRegistry.registerComponent('Messenger', () => SimpleApp);
