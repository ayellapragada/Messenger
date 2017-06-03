import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Scene } from 'react-native-router-flux';

import RootReducer from './app/reducers/root_reducer';
import App from './app/app';
import Chat from './app/components/chat/chat.js';

const logger = createLogger();
const middleware = [thunk, logger];
const store = compose(applyMiddleware(...middleware))(createStore)(RootReducer);
const ConnectedRouter = connect()(Router);

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter>
        <Scene key="root">
          <Scene key="home"
            component={App}
            initial={true}
            hideNavBar={true}
          />
          <Scene key="chat"
            component={App}
            initial={true}
            hideNavBar={true}
          />
      </Scene>
    </ConnectedRouter>
  </Provider>
  );
};

export default Root;
