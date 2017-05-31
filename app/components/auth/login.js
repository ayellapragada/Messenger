import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions.js';

import Home from '../home/home.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      showProgress: false
    };

    this.onRegisterPressed = this.onRegisterPressed.bind(this);
    this.getUsersFromApi = this.getUsersFromApi.bind(this);
  }

  onRegisterPressed() {
    this.getUsersFromApi();
  }

  getUsersFromApi() {
    const { email, password } = this.state;
    this.props.login({email, password});
  }

  render() {
    const {email, password} = this.state;

    return(
      <View style={styles.container}>
        <TextInput 
          onChangeText={val => this.setState({email: val})}
          style={styles.input} placeholder="Email"
        />

      <TextInput 
        onChangeText={val => this.setState({password: val})}
        style={styles.input} placeholder="Password"
        secureTextEntry={true}
      />

    <TouchableOpacity 
      style={styles.button}
      onPress={this.onRegisterPressed}
    >
      <Text style={styles.buttonText}>
        Log In
      </Text>
    </TouchableOpacity>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    textAlign: 'center',
  },
  button: {
    padding: 20,
    alignSelf: 'center',
  },
  buttonText: {

  },
});

const mapStateToProps = (state) => (
  {
    errors: state.session.errors
  }
);

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
