const body = document.querySelector('.body');

const menu = document.querySelector('.js-menu');
const menuBtn = document.querySelector('.js-menu-btn');
const menuCloseBtn = document.querySelector('.js-close-menu-btn');
const menuList = document.querySelector('.js-menu-list');

menuCloseBtn.addEventListener('click', closeMenu);

const closeMenuByClickOutside = e => {
  if (!e.target.closest('.js-menu') && !e.target.closest('.js-menu-btn')) {
    closeMenu();
  }
};

menuList.addEventListener('click', e => {
  if (e.target.classList.contains('header-nav__link')) {
    closeMenu();
  }
});

menuBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', true);
  document.body.classList.add('no-scroll');

  window.addEventListener('click', closeMenuByClickOutside);
});

window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
  if (!e.matches) return;
  closeMenu();
});

function closeMenu() {
  menu.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('no-scroll');

  window.removeEventListener('click', closeMenuByClickOutside);
}
