import './style.css';

const images = {
  treasure: '💰',
  leafs: '🍃'
};

const trees = document.querySelectorAll('.tree');

trees.forEach(tree => {
  tree.addEventListener('mouseover', () => {
    if (tree.classList.contains('treasure')) {
      tree.innerHTML = images.treasure;
      goal();
    } else tree.innerHTML = images.leafs;
  });
});

const goal = () => {
  const div = document.createElement('div');
  div.innerHTML = `Gratulacje! Znalazłeś skarb ${images.treasure}`;
  div.style.fontSize = '24px';
  div.style.fontFamily = 'Lato';
  document.body.appendChild(div);
};
