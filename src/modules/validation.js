const validation = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  const calcType = document.querySelector('.calc-type');
  const inputsText = document.querySelectorAll('input[type="text"]');
  const mess = document.querySelector('.mess');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsTel = document.querySelectorAll('input[type="tel"]');

  calcItems.forEach(item => {
    item.addEventListener('input', e => {
      if (item !== calcType) {
        e.target.value = e.target.value.replace(/\D+/, '');
      }
    });
  });

  inputsText.forEach(item => {
    let bool = true;
    item.addEventListener('input', e => {
      calcItems.forEach(calcItem => {
        if (e.target === calcItem) {
          bool = false;
        }
      });
      if (bool) {
        e.target.value = e.target.value.replace(/[^а-я\s\-]+/i, '');
      }
    });
  });

  mess.addEventListener('input', e => e.target.value = e.target.value.replace(/[^а-я\s\-]+/i, ''));

  inputsEmail.forEach(item => {
    item.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']+/i, '');
    });
  });

  inputsTel.forEach(item => {
    item.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^0-9\(\-\)]+/, '');
    });
  });
};

export default validation;