const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const closeBtn = document.querySelector('.close-btn');
  const menu = document.querySelector('menu');
  const menuList = menu.querySelectorAll('ul>li>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  menuList.forEach(item => item.addEventListener('click', handleMenu));
};

export default menu;