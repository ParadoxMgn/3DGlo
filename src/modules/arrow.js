const arrow = () => {
  const arrow = document.querySelector('main>a');
  const img = arrow.querySelector('img');

  const animArrow = (up, down) => {
    let top = 0;
    let bool = true;
    const move = () => {
      requestAnimationFrame(move);

      if (top > down) { bool = !bool; }
      if (top < up) { bool = !bool; }

      if (bool) {
        if (top > 10) {
          img.style.top = (top += 0.6) + 'px';
        } else {
          img.style.top = (top += 0.8) + 'px';
        }
      } else {
        if (top < -10) {
          img.style.top = (top -= 0.6) + 'px';
        } else {
          img.style.top = (top -= 0.8) + 'px';
        }
      }
    };

    move();
  };

  arrow.style.position = 'relative';
  arrow.style.width = '17px';
  arrow.style.height = '49px';
  img.style.position = 'absolute';
  img.style.left = '0';
  img.style.top = '0';

  animArrow(-15, 15);
};

export default arrow;