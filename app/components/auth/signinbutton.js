import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome, { Icons  } from 'react-native-fontawesome';

export default class SigninButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {text, changeLogin} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={changeLogin}
        >
          <Text style={styles.text}>
            <Text>
              <FontAwesome style={styles.icon}>
                {Icons.facebookSquare}
              </FontAwesome> 
            </Text>
            <Text>
              {text}
            </Text>
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    padding: 10,
  },
  text: {
    fontSize: 32,
    justifyContent: 'space-around',
  },
  icon: {
    color: '#0084ff',
  }
});
