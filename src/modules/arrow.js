const arrow = () => {
  const arrow = document.querySelector('main>a');

  const animArrow = () => {
    let count = 0;
    let bool = true;

    const anim = () => {

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

export default arrow;