const modal = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const service = document.querySelector('.service');

  service.addEventListener('click', e => {
    if (e.target.classList.contains('popup-btn')) {
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
    }
  });

  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close')) {
      popup.style.display = 'none';
      popupContent.style.opacity = '0';
    }
  });
};

export default modal;