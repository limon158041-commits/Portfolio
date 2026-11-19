// Mobile menu
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  })
);

// Project filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach((btn) =>
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const tool = btn.dataset.filter;
    cards.forEach((card) =>
      card.classList.toggle('hidden', tool !== 'all' && card.dataset.tool !== tool)
    );
  })
);

// Footer year
document.querySelector('#year').textContent = new Date().getFullYear();
