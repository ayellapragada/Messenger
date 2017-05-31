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

export default class Login extends Component {
  constructor() {
    super();

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
    return fetch(`http://192.168.128.240:3000/session`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      }); 
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
