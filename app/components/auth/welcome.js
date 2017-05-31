import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome, { Icons  } from 'react-native-fontawesome';

export default class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.icon}>
          <FontAwesome>{Icons.commenting}</FontAwesome>
        </Text>
        <Text style={styles.text}>
          Welcome to Messenger
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  text: {
    fontSize: 40,
    fontWeight: "100",
    textAlign: 'center',
    color: 'black',
  },
  icon: {
    color: '#0084ff',
    fontSize: 100,
  }
});
