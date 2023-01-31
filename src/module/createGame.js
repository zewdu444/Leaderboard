import { apiLink } from './apiURL.js';

const gameName = {
  name: 'MarioForever',
};
const createGameID = async () => {
  try {
    const res = await fetch(apiLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(gameName),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default createGameID;