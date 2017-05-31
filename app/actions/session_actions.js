import * as APIUtil from '../utils/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIE_ERRORS";
export const USER_LOGOUT = "USER_LOGOUT";

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(returnedUser => dispatch(receiveCurrentUser(returnedUser)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(user => {
    dispatch(receiveCurrentUser(null));
  })
);


export const receiveCurrentUser = currentUser => ({
  type: 'RECEIVE_CURRENT_USER',
  currentUser
});

export const receiveErrors = errors => ({
  type: 'RECEIVE_ERRORS',
  errors
});
