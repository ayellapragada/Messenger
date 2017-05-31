import { BASE_URL, handleResponse } from './base_util.js';

export const login = user => (
  fetch(
    `${BASE_URL}/session`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user
      })
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);

export const logout = () => (
  fetch(
    `${BASE_URL}/session`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);
