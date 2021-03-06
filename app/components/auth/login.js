import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions.js';

import Home from '../home/home.js';

const ACCESS_TOKEN = 'session_token';

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
    this.login = this.login.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillMount() {
    this.login()
  }

  login() {
    AsyncStorage.getItem('session_token')
      .then(token => this.props.login({token}))
      .then((res) => { 
        if (res.currentUser) {
          this.storeToken(res.currentUser.session_token)
        }
      });
  }


  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
    } catch(error) {
      console.log('Failed to store token in storage.');
    }
  }

  async getToken() {
    try {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log(token);
    } catch(error) {
      console.log('Failed to get token from storage');
    }
  }

  onRegisterPressed() {
    this.getUsersFromApi();
  }

  getUsersFromApi() {
    const { email, password } = this.state;
    this.props.login({email, password})
      .then((res) => { this.storeToken(res.currentUser.session_token)});
  }

  demo() {
    this.props.login({email: 'test@password.com', password:'password'})
      .then((res) => { this.storeToken(res.currentUser.session_token)});
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
      <View style={styles.buttonsView}>
        <Button 
          title="Log In"
          style={styles.button}
          onPress={this.onRegisterPressed}
        />
        <Button
          style={styles.button}
          title="Demo"
          color="#841584"
          onPress={this.demo}
        />
      </View>
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
  },
  buttonsView: {
    justifyContent: 'space-around',
    alignItems: 'center',
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
