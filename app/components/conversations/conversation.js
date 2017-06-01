import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';


class Conversation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, recipient, sender, message } = this.props;
    const otherUser = currentUser.id === recipient.id ? sender : recipient;


    return (
      <Text>{ otherUser.full_name }: { message.body }</Text>
    );
  }

}

const styles = StyleSheet.create({
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
});

export default connect (mapStateToProps, mapDispatchToProps)(Conversation);
