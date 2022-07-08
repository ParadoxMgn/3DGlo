import { animate } from './helper';

const modal = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const service = document.querySelector('.service');

  popupContent.style.position = 'relative';
  popupContent.style.left = '0';
  popupContent.style.top = '0';
  popupContent.style.margin = '120px auto';

  service.addEventListener('click', e => {
    if (e.target.classList.contains('popup-btn')) {
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';

      if (document.documentElement.clientWidth > 768) {
        popupContent.style.transform = 'scale(0, 0) rotate(0deg)';

        animate({
          duration: 700,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            popupContent.style.transform = `scale(${progress}, ${progress}) rotate(${720 * progress}deg)`;
          }
        });
      }

    }
  });

  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close')) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};

export default modal;