import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class Conversation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, recipient, sender, message } = this.props;

    const otherUser = currentUser.id === recipient.id ? sender : recipient;
    const lastSender = currentUser.id === message.user_id ? "You" : otherUser.fname;

    const date = new Date(message.created_at);
    const dateForMessage = date.toDateString();


    return (
      <TouchableHighlight 
        style={styles.touchable}
        underlayColor="lavenderblush"
        onPress={() => { Actions.chat();}}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: otherUser.profile_url}}
          />
          <View style={styles.messageContainer}>
            <View>
              <Text style={styles.messageName}>
                { otherUser.full_name }
              </Text>
              <Text style={styles.message}>
                {`${lastSender}: `}{ message.body }
              </Text>
            </View>

            <View>
              <Text style={styles.messageTime}>
                {dateForMessage}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageName: {
    color: 'black',
    fontSize: 18,
  },
  messageTime: {
    marginTop: 8,
    fontSize: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  touchable: {

  }
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
});

export default connect (mapStateToProps, mapDispatchToProps)(Conversation);
