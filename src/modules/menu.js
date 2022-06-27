const menu = () => {
  const menu = document.querySelector('menu');
  const menuList = menu.querySelectorAll('ul>li>a');

  document.addEventListener('click', e => {
    menuList.forEach(item => {
      if (e.target.classList.contains('close-btn') || !e.target.closest('menu') || item === e.target) {
        menu.classList.remove('active-menu');
      }
    });
    if (e.target.closest('.menu')) {
      menu.classList.add('active-menu');
    }
  });
};

export default menu;