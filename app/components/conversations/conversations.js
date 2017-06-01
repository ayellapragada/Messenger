import React, { Component } from 'react';
import { 
  Text, 
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'; 
import Pusher from 'pusher-js/react-native';

import { 
  fetchAllConversations,
  getMessages 
} from '../../actions/message_actions.js';
import Conversation from './conversation.js';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

class Conversations extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllConversations();
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
        } 
      });
  }      

  render() {
    const conversations = Object.values(this.props.conversations);
    const dataSource = ds.cloneWithRows(conversations);

    return (
      <View style={styles.container}>
        <Text style={styles.text}> {conversations.length} Conversations! </Text>
        <ListView 
          dataSource={dataSource}
          renderRow={(rowData) => <Conversation {...rowData} />}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations,
});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  getMessages: (id) => dispatch(getMessages(id)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Conversations);
