const menuBtn = document.querySelector('.navbar-primary__btn-menu');
const [logo1, logo2] = document.querySelectorAll('.logo');
const menuPrimary = document.querySelector('.navbar-primary__content');

menuBtn.addEventListener('click', () => {
  menuPrimary.classList.toggle('is-expanded');
  logo1.classList.toggle('menu-is-down');
  logo2.classList.toggle('menu-is-down');
  menuBtn.classList.toggle('menu-is-down');
});
