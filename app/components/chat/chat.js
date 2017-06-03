import React, { Component } from 'react';
import { View, Text,  StyleSheet, } from 'react-native';
import { connect } from 'react-redux';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Chat </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
});

export default connect (mapStateToProps, mapDispatchToProps)(Chat);
