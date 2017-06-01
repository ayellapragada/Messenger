import { BASE_URL, handleResponse } from './base_util.js';

export const allConversations = () => (
  fetch(
    `${BASE_URL}/api/conversations`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
)

export const newConversation = (sender_id, recipient_id) => (
  fetch(
    `${BASE_URL}/api/conversations`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversation: { sender_id, recipient_id }
      })
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
)

export const readConversation = (id) => (
  fetch(
    `${BASE_URL}/api/conversations/read/${id}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
)

export const readConversations = () => (
  fetch(
    `${BASE_URL}/api/conversations/read`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);

export const allMessages = (id) => (
  fetch(
    `${BASE_URL}/api/conversations/${id}/messages`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);

export const sendMessages = (conversation_id, user_id, body) => (
  fetch(
    `${BASE_URL}/api/conversations/${conversation_id}/messages`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: { conversation_id, user_id, body }
      })
    })
  .then(handleResponse)
  .then(response => response.json())
  .then(responseJson => responseJson )
);
