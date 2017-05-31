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
          <Text>
            <FontAwesome>
              {Icons.facebookSquare}
            </FontAwesome> 
            {text}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
});
