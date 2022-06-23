const validation = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  const calcType = document.querySelector('.calc-type');
  const inputsText = document.querySelectorAll('input[type="text"]');
  const mess = document.querySelector('.mess');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsTel = document.querySelectorAll('input[type="tel"]');

  const replaceHyphen = elem => {
    elem.value = elem.value.replace(/\-+/g, '-');
    elem.value = elem.value.replace(/^[\s\-]+/g, '');
    elem.value = elem.value.replace(/[\s\-]+$/g, '');
  };

  const replaceText = elem => {
    elem.value = elem.value.replace(/[^а-я\s\-]+/gi, '');
    elem.value = elem.value.replace(/\s+/g, ' ');
    replaceHyphen(elem);
  };

  calcItems.forEach(item => {
    item.addEventListener('blur', e => {
      if (item !== calcType) {
        e.target.value = e.target.value.replace(/\D+/g, '');
      }
    });
  });

  inputsText.forEach(item => {
    let bool = true;
    item.addEventListener('blur', e => {
      calcItems.forEach(calcItem => {
        if (e.target === calcItem) {
          bool = false;
        }
      });
      if (bool) {
        replaceText(e.target);
        e.target.value = e.target.value.replace(/^([а-я])([a-я\s\-]+)/gi, (str, $1, $2) => {
          return `${$1.toUpperCase()}${$2.toLowerCase()}`;
        });
      }
    });
  });

  mess.addEventListener('blur', e => {
    replaceText(e.target);
  });

  inputsEmail.forEach(item => {
    item.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']+/gi, '');
      replaceHyphen(e.target);
    });
  });

  inputsTel.forEach(item => {
    item.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/[^0-9\(\-\)]+/g, '');
      replaceHyphen(e.target);
    });
  });
};

export default validation;