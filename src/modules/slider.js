const slider = (classSlider, classSlide, classSlideDefault) => {
  const portfolioContent = document.querySelector(`.${classSlider}`);
  const portfolioItem = document.querySelectorAll(`.${classSlide}`);
  let counter = 0;
  let id;

  const createDots = () => {
    const portfolioDots = document.querySelector('.portfolio-dots');

    portfolioItem.forEach((item, index) => {
      if (index === 0) {
        portfolioDots.insertAdjacentHTML('beforeend', `<li class="dot dot-active"></li>`);
      } else {
        portfolioDots.insertAdjacentHTML('beforeend', `<li class="dot"></li>`);
      }
    });
  };

  const startSlide = (timeOut) => {
    id = setInterval(() => { slide(1, null); }, timeOut);
  };

  const autoSlide = () => {
    portfolioContent.addEventListener('click', e => {
      const dot = document.querySelectorAll('.dot');
      e.preventDefault();

      if (e.target.matches('.next')) {
        slide(1, e.target);
      }

      if (e.target.matches('.prev')) {
        slide(-1, e.target);
      }

      dot.forEach((item, index) => {
        if (e.target === item) {
          slide(0, item, index);
        }
      });
    });
  };

  const slide = (arrow, element, index = 0) => {
    const dot = document.querySelectorAll('.dot');

    portfolioItem[counter].classList.remove(`${classSlideDefault}`);
    dot[counter].classList.remove('dot-active');

    counter = (counter + arrow) >= portfolioItem.length ? 0 : (counter + arrow) < 0 ? (portfolioItem.length - 1) : (counter + arrow);

    if (element && element.matches('.dot')) {
      counter = index;
    }

    dot[counter].classList.add('dot-active');
    portfolioItem[counter].classList.add(`${classSlideDefault}`);
  };

  const stopSlide = () => {
    portfolioContent.addEventListener('mouseenter', e => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        clearInterval(id);
      }
    }, true);

    portfolioContent.addEventListener('mouseleave', e => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        startSlide(2000);
      }
    }, true);
  };

  const scrollToSlide = () => {
    if (window.pageYOffset >= 1000) {
      startSlide(2000);
      document.removeEventListener('scroll', scrollToSlide);
    }
  };



  if (!portfolioContent || portfolioItem.length === 0 || !document.querySelector(`.${classSlideDefault}`)) {
    return;
  }

  document.addEventListener('scroll', scrollToSlide);

  createDots();
  autoSlide();
  stopSlide();
};

export default slider;