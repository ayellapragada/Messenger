import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Login from './login.js';
import Welcome from './welcome.js';
import SigninButton from './signinbutton.js';

export default class Auth extends Component {
  constructor() {
    super();

    this.state = {login: false};
    this.changeLogin = this.changeLogin.bind(this);
  }

  changeLogin() {
    this.setState({login: !this.state.login});
  }

  render() {
    const { login } = this.state;
    const text = login ? "Go back" : "Sign in to Fafbook!";

    return (
      <View style={styles.container}>
        { login ? <Login /> : <Welcome /> }
        <SigninButton text={text} changeLogin={this.changeLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    alignSelf: 'center',
  },
  icon: {
    justifyContent: 'space-between',
  }
});
