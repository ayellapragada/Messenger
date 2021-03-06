import React, { Component } from 'react'; import { 
  View, 
  Text,  
  StyleSheet, 
  KeyboardAvoidingView,
  Platform,
  FlatList, } from 'react-native';
import { connect } from 'react-redux';
import Pusher from 'pusher-js/react-native';

import { 
  getMessages,
} from '../../actions/message_actions.js';

import Message from './message.js';
import ChatInput from './input.js';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034', {cluster: "mt1"});
    this.chatRoom = this.pusher.subscribe('messages')
  }

  componentWillUnmount() {
    this.chatRoom.unbind();
    this.pusher.unsubscribe(this.chatRoom); 
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;
    this.chatRoom.bind('new_message', 
      (data) => {              
        if (data.recipient_id === currentUser.id) {                               
          this.props.getMessages(data.id);     
          this.flatList.scrollToEnd();
        } 
      });
  }      

  render() {
    const { sender, recipient } = this.props.conversation;
    const { conversation, currentUser, input } = this.props;

    const messages = conversation.messages.reverse().splice(0, 20).reverse();

    const otherUser = currentUser.id === recipient.id ? sender : recipient;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={messages}
          keyExtractor={message => message.id }
          renderItem={(message) => <Message {...message} otherUser={otherUser} />}
          ref={ref => this.flatList = ref }
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.flatList.scrollToEnd();
          }}
        />
        <ChatInput convoID={conversation.id} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

const mapStateToProps = ( state, ownProps ) => ({
  currentUser: state.session.currentUser,
  conversation: state.conversations[ownProps.id],
});

const mapDispatchToProps = dispatch => ({
  getMessages: (id) => dispatch(getMessages(id)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Chat);
