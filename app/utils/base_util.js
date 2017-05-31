export const BASE_URL = 'http://192.168.0.146:3000';

export const handleResponse = (response) => {
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
