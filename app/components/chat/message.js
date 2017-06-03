import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
} from 'react-native';

export default class Message extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { item, otherUser } = this.props;
    const otherAuthor =  item.user_id === otherUser.id;

    return (
      <View style={[styles.container, otherAuthor && styles.otherContainer]}>
        { otherAuthor && 
          <Image 
            style={styles.image}
            source={{uri: otherUser.profile_url}} 
          /> }

        <Text style={[styles.text, otherAuthor && styles.otherText]}>
          {item.body}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    maxWidth: 300,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 5,
  },
  text: {
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: '#4080ff',
    padding: 10,
    color: 'white',
  },
  otherContainer: {
    maxWidth: 280,
    alignSelf: 'flex-start',
  },
  otherText: {
    backgroundColor: '#f1f0f0',
    color: 'black',
  },
});

