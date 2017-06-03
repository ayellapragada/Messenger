import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/message_actions.js';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {body: ""};
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage() {
    const { convoID, currentUser } = this.props;
    const { body } = this.state;
    this.props.sendMessage(convoID, currentUser.id, body)
    .then(this.setState({body: ""}));
  }

  render() {
    const { body } = this.state;
    return(
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        value={body}
        onChangeText={val => this.setState({body: val})}
        onSubmitEditing={this.submitMessage}
        placeholder="Type a message..."
      />
    );
  }

}


const styles = StyleSheet.create({
  input: {

  },
});

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (conversationId, userId, body) => dispatch(
    sendMessage(conversationId, userId, body))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChatInput);
