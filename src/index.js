import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import sendScore from './module/sendScore.js';
import displayScore from './module/displayScore.js';

const scoreSubmit = document.getElementById('scoresubmit');
const scoreUser = document.getElementById('user');
const score = document.getElementById('score');
const scoreRefresh = document.getElementById('refresh');
// initial display score
displayScore();
// submit score
const submitScore = async () => {
  scoreSubmit.addEventListener('click', async (e) => {
    if (scoreUser.value.trim() !== '' && +score.value.trim() !== '') {
      await sendScore({ user: scoreUser.value.trim(), score: +score.value.trim() });
      scoreUser.value = '';
      score.value = '';
      displayScore();
    } else {
      e.preventDefault();
    }
  });
};
// refresh score
const refreshScore = async () => {
  scoreRefresh.addEventListener('click', async () => {
    window.location.reload();
    displayScore();
  });
};

// call submit and refresh score
submitScore();
refreshScore();