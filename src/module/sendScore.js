import { apiLink, gameID } from './apiURL.js';

const sendScore = async (playerScore) => {
  try {
    const res = await fetch(`${apiLink + gameID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(playerScore),
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
export default sendScore;