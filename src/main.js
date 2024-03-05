const openMenuButton = document.querySelector('.btn-open-menu');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('is-open');
});

const closeMenuButton = document.querySelector('.mobile-menu-btn');

closeMenuButton.addEventListener('click', function() {
  mobileMenu.classList.remove('is-open');
});