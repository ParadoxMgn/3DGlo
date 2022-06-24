const scrolling = () => {
  const menuList = document.querySelectorAll('menu ul>li>a');
  const arrow = document.querySelector('main>a');
  const block = document.getElementById('service-block');

  const getId = elem => elem.href.slice(elem.href.lastIndexOf('#') + 1);

  arrow.addEventListener('click', e => {
    e.preventDefault();

    let scrollTop = document.documentElement.scrollTop;
    const iteration = (block.offsetTop - scrollTop) / 20;

    const scrollDown = () => {
      let idScroll = requestAnimationFrame(scrollDown);

      scrollTop += iteration;
      document.documentElement.scrollTop = scrollTop;

      if (document.documentElement.scrollTop > (block.offsetTop - iteration)) {
        cancelAnimationFrame(idScroll);
      }
    };

    scrollDown();
  });

  menuList.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      let element = document.getElementById(`${getId(item)}`);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
};

export default scrolling;