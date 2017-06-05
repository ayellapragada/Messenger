import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { StyleSheet } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Scene, Actions } from 'react-native-router-flux';

import RootReducer from './app/reducers/root_reducer';
import App from './app/app';
import Chat from './app/components/chat/chat.js';
import Search from './app/components/search/search.js';

const logger = createLogger();
const middleware = [thunk, logger];
const store = compose(applyMiddleware(...middleware))(createStore)(RootReducer);
const ConnectedRouter = connect()(Router);


const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="home"
      component={App}
      initial={true}
      hideNavBar={true}
    />
    <Scene key="chat" 
      component={Chat} 
      hideNavBar={false}
    />
    <Scene key="search"
      component={Search}
      hideNavBar={true}
      title="Search"
    />
  </Scene>
);

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter scenes={Scenes} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  navBar: {
    color: 'red',

  },
  navTitle: {

  },
});

export default Root;
