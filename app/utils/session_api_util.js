import { BASE_URL } from './base_url.js';

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
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
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
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
);
