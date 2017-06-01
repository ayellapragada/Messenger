import React from 'react';
import { 
  Text, 
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import Conversations from '../conversations/conversations.js';
import { logout } from '../../actions/session_actions.js';



const Home = ({currentUser, logout}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {currentUser.full_name}
      </Text>
      <Image 
        style={styles.image}
        source={{uri: currentUser.profile_url}}
      />
      <Conversations />
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect (mapStateToProps, mapDispatchToProps)(Home);
