import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';

import Auth from './components/auth/auth.js';
import Home from './components/home/home.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <View style={styles.container}>
        {currentUser ? 
          <Home currentUser={currentUser}/> : <Auth />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

export default connect (mapStateToProps, mapDispatchToProps)(App);
