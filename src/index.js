import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import getScore from './module/getScore.js';
import sendScore from './module/sendScore.js';

const displayScore = async () => {
  // await sendScore({ user: 'zewdu erkyhun', score: 30 });
  console.log(await getScore());
};
displayScore();