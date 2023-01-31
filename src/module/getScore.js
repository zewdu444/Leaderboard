import { apiLink, gameID } from './apiURL.js';

const getScore = async () => {
  try {
    const res = await fetch(`${apiLink + gameID}/scores`);
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data.result;
  } catch (error) {
    return false;
  }
};
export default getScore;