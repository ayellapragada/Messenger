import { 
  RECEIVE_CURRENT_USER, 
  RECEIVE_ERRORS  } 
from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, { errors: action.errors });
    default:
      return state;
  }
};

export default SessionReducer;
