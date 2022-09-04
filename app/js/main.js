import '../scss/style.scss';

const nav = document.querySelector('[data-js="nav"]');
nav.addEventListener('click', filterNavClick);

function filterNavClick({ target, currentTarget }) {
  const dataset = target.dataset.js;
  dataset === 'toggle-menu' && toggleMenu(currentTarget);
}

function toggleMenu(nav) {
  nav.classList.toggle('active');
  nav.classList.contains('active') || closing(nav);
}

function closing(element) {
  element.classList.add('closing');
  element.addEventListener(
    'animationend',
    ({ currentTarget }) => {
      currentTarget.classList.remove('closing');
    },
    { once: true }
  );
}
