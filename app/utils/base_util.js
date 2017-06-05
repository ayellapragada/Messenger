// export const BASE_URL = 'http://192.168.0.146:3000';  // Old Office
// export const BASE_URL = 'http://192.168.128.240:3000';  // New Office
// export const BASE_URL = 'http://192.168.0.11:3000';  // Home
export const BASE_URL = 'https://www.fafbook.us'; // Fafbook / Heroku

export const handleResponse = (response) => {
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
