import './style.css';

const images = {
  treasure: '💰',
  leafs: '🍃'
};

const forest = document.querySelector('.entry');

forest.addEventListener('mouseover', event => {
  if (event.target.className.includes('treasure')) {
    event.target.innerHTML = images.treasure;
    return alert('Congratulations you win');
  } else event.target.innerHTML = images.leafs;
});
