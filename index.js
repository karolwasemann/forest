import './style.css';
import { Howl, Howler } from 'howler';

const images = {
  treasure: '💰',
  leafs: '🍃'
};

const sound = new Howl({
  src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3']
});

const forest = document.querySelector('.entry');

forest.addEventListener('mouseover', event => {
  if (event.target.className.includes('treasure')) {
    event.target.innerHTML = images.treasure;
    goal();
  } else event.target.innerHTML = images.leafs;
});

function goal() {
  const message = document.createElement('p');
  message.innerHTML = 'Congratulations you win';
  document.body.appendChild(message);

  sound.play();
  setTimeout(() => {
    sound.stop();
    alert('Congratulations you win');
  }, 3000);
}
