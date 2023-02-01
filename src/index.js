import './style.css';
import sendScore from './module/sendScore.js';
import getScore from './module/getScore.js';
import displayScore from './module/displayScore.js';

const scoreSubmit = document.getElementById('scoresubmit');
const scoreUser = document.getElementById('user');
const score = document.getElementById('score');
const scoreRefresh = document.getElementById('refresh');

// initial display score
window.addEventListener('DOMContentLoaded', () => {
  displayScore();
});
// submit score
scoreSubmit.addEventListener('click', async (e) => {
  if (scoreUser.value.trim() !== '' && +score.value.trim() !== '') {
    await sendScore({ user: scoreUser.value.trim(), score: +score.value.trim() });
    scoreUser.value = '';
    score.value = '';
  } else {
    e.preventDefault();
  }
});

// refresh score
scoreRefresh.addEventListener('click', async () => {
  window.location.reload();
  await getScore();
  displayScore();
});
