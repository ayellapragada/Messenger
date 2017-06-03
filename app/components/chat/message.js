import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { item, otherUser } = this.props;

    return (
      <View>
        <Text>
          {item.body}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

