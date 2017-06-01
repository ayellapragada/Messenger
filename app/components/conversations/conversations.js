import React, { Component } from 'react';
import { 
  Text, 
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'; 

import { fetchAllConversations } from '../../actions/message_actions.js';
import Conversation from './conversation.js';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

class Conversations extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllConversations();
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
});

export default connect (mapStateToProps, mapDispatchToProps)(Conversations);
