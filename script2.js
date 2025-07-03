const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('open');
});
