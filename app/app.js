import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Auth from './components/auth/auth.js';

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Auth />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
