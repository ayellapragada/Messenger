import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class Conversations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Conversations! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
});

export default connect (mapStateToProps, mapDispatchToProps)(Conversations);
