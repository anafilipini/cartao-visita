const card = document.getElementById('card');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
});
