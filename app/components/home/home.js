import React from 'react';
import { 
  Text, 
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Conversations from '../conversations/conversations.js';
import { logout } from '../../actions/session_actions.js';



const Home = ({currentUser, logout}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button 
          title="Search" 
          onPress={() =>{Actions.search()}}
        />
        <View style={styles.headerView}>
          <Image 
            style={styles.image}
            source={{uri: currentUser.profile_url}}
          />
          <Text style={styles.text}>
            {currentUser.fname}
          </Text>
        </View>
        <Button
          title="Logout"
          onPress={logout}
        />
      </View>
      <Conversations />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
  },
  button: {
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: "space-between"
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 5,
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect (mapStateToProps, mapDispatchToProps)(Home);
