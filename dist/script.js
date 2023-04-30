const menuList = document.querySelector('#menu-list');
const menuBtn = document.querySelector('#menu-icon');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
});
