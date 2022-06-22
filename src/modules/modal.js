const modal = () => {
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');
  const popupContent = document.querySelector('.popup-content');


  popupBtn.forEach(item => {
    item.addEventListener('click', () => {
      let opacity = 0;
      popupContent.style.opacity = `${opacity}`;
      popup.style.display = 'block';

      const animPoup = () => {
        let id = requestAnimationFrame(animPoup);

        if (document.documentElement.clientWidth < 768) {
          cancelAnimationFrame(id);
          popupContent.style.opacity = '1';
        } else {
          popupContent.style.opacity = `${opacity}`;
          opacity += 0.04;
        }

        if (opacity >= 1) {
          cancelAnimationFrame(id);
        }
      };

      animPoup();
    });
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    popupContent.style.opacity = '0';
  });



};

export default modal;