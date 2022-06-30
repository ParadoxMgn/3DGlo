const arrow = () => {
  const arrow = document.querySelector('main>a');
  const img = arrow.querySelector('img');

  const animArrow = (up, down) => {
    let top = 0;
    let bool = true;
    const move = () => {
      if (top > down) { bool = !bool; }
      if (top < up) { bool = !bool; }

      if (bool) {
        arrow.style.transform = `translateY(${top += 5}px)`;
      } else {
        arrow.style.transform = `translateY(${top -= 5}px)`;
      }

      requestAnimationFrame(move);
    };

    move();
  };

  animArrow(-130, 130);
};

export default arrow;