import React from 'react';
import { 
  Text, 
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';

const Home = ({currentUser, logout}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {currentUser.full_name}
      </Text>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect (mapStateToProps, mapDispatchToProps)(Home);
