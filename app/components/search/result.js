import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { createNewConversation } from '../../actions/message_actions.js';

class Result extends Component {
  constructor(props) {
    super(props);

    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch() {
    const {item, currentUser} = this.props;

    this.props.createNewConversation(currentUser.id, item.id)
      .then(responseJson => {
          Actions.pop();
          Actions.chat({
            title: `${item.full_name}`,
            id: Object.values(responseJson.conversation)[0].id
          });
      })
  }

  render() {
    const { item } = this.props;

    return (
      <TouchableHighlight 
        style={styles.touchable}
        underlayColor="lavenderblush"
        onPress={this.handleTouch}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: item.profile_url}}
          />
          <Text style={styles.text}>
            {item.full_name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
});

const mapStateToProps = ( state, ownProps ) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createNewConversation: (sender_id, recipient_id) => dispatch(createNewConversation(
    sender_id, recipient_id))
});

export default connect (mapStateToProps, mapDispatchToProps)(Result);
