const scrolling = () => {
  const menu = document.querySelector('menu');
  const menuList = menu.querySelectorAll('ul>li>a');
  const serviceBlock = document.getElementById('service-block');
  const arrow = document.querySelector('main>a');

  arrow.addEventListener('click', e => {
    e.preventDefault();

    const id = arrow.href.slice(arrow.href.lastIndexOf('#') + 1);
    const block = document.getElementById(`${id}`);
    let scrollTop = document.documentElement.scrollTop;
    const iteration = (block.offsetTop - scrollTop) / 20;

    const scrollDown = () => {
      let idScroll = requestAnimationFrame(scrollDown);

      scrollTop += iteration;
      document.documentElement.scrollTop = scrollTop;

      if (document.documentElement.scrollTop === block.offsetTop) {
        cancelAnimationFrame(idScroll);
      }
    };

    scrollDown();
  });

  menuList.forEach(item => {
    const id = item.href.slice(item.href.lastIndexOf('#') + 1);

    item.addEventListener('click', e => {
      e.preventDefault();

      let element = document.getElementById(`${id}`);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  const animArrow = () => {
    let count = 0;
    let bool = true;

    const anim = () => {
      // requestAnimationFrame(anim);



      if (count === 50) {
        bool = false;
      }
      if (count === 0) {
        bool = true;
      }
      if (bool) {
        count += 50;
      } else {
        count -= 50;
      }
      arrow.style.transform = `translateY(${count}%)`;
    };

    anim();

    setInterval(anim, 1000);
  };

  animArrow();


};

export default scrolling;