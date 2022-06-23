const placeholder = () => {
  const inputs = document.querySelectorAll('input');

  const hiddenPlace = element => {
    const place = element.placeholder;

    element.addEventListener('focus', () => {
      element.placeholder = '';

      element.addEventListener('blur', () => {
        element.placeholder = place;
      });
    });
  };

  inputs.forEach(item => {
    hiddenPlace(item);
  });

};

export default placeholder;