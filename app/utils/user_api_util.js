import { BASE_URL, handleResponse } from './base_util.js';

export const searchUsers = (query, friendsOnly = true) => (
  fetch( `${BASE_URL}/api/friendsearch/${query}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);
