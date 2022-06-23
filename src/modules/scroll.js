const scrolling = () => {
  const menuList = document.querySelectorAll('menu ul>li>a');
  const arrow = document.querySelector('main>a');
  const block = document.getElementById('service-block');

  arrow.addEventListener('click', e => {
    e.preventDefault();

    let scrollTop = document.documentElement.scrollTop;
    const iteration = (block.offsetTop - scrollTop) / 20;

    const scrollDown = () => {
      let idScroll = requestAnimationFrame(scrollDown);

      if (document.documentElement.scrollTop >= block.offsetTop) {
        cancelAnimationFrame(idScroll);
      }

      scrollTop += iteration;
      document.documentElement.scrollTop = scrollTop;
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