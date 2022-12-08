const menuBtn = document.querySelector('.navbar-primary__btn-more');
const menuPrimary = document.querySelector('.navbar-primary');

menuBtn.addEventListener('click', () =>
  menuPrimary.classList.toggle('is-expanded')
);
