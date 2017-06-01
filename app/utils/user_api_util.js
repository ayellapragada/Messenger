import { BASE_URL, handleResponse } from './base_util.js';

export const searchUsers = (query, friendsOnly = true) => (
  fetch( `${BASE_URL}/api/search/${query}`)
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);
