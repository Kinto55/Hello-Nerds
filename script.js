const h1 = document.querySelector('h1');

window.addEventListener('load', () => {
  h1.classList.add('animated');
});

window.addEventListener('resize', () => {
  const vw = window.innerWidth;
  h1.style.fontSize = `${vw/10}vw`;
});
