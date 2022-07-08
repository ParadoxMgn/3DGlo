const validation = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  const calcType = document.querySelector('.calc-type');
  const inputsText = document.querySelectorAll('input[type="text"]');
  const mess = document.querySelector('.mess');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsTel = document.querySelectorAll('input[type="tel"]');

  const replaceHyphen = elem => {
    elem.value = elem.value.replace(/[\s\-\(\)\+]+$/g, '');
  };

  const replaceText = elem => {
    elem.value = elem.value.replace(/[^а-я\s]+/gi, '');
    elem.value = elem.value.replace(/\s+/g, ' ');
    replaceHyphen(elem);
  };

  const replaceMess = elem => {
    elem.value = elem.value.replace(/[^0-9а-я\s\.\,\?\!\:\;\"\']+/gi, '');
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
        e.target.value = e.target.value.replace(/^([а-я])([a-я\s]+)/gi, (str, $1, $2) => {
          return `${$1.toUpperCase()}${$2.toLowerCase()}`;
        });
      }
    });
  });

  mess.addEventListener('blur', e => {
    replaceMess(e.target);
  });

  inputsEmail.forEach(item => {
    item.addEventListener('blur', e => {
      e.target.value = e.target.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']+/gi, '');
      replaceHyphen(e.target);
    });
  });

  inputsTel.forEach(item => {
    item.addEventListener('blur', e => {
      replaceHyphen(e.target);
    });
    item.addEventListener('input', e => {
      checkPhone(e.target);
      e.target.value = e.target.value.replace(/\-+/g, '-');
      e.target.value = e.target.value.replace(/\++/g, '+');
      e.target.value = e.target.value.replace(/\(+/g, '(');
      e.target.value = e.target.value.replace(/\)+/g, ')');
      e.target.value = e.target.value.replace(/^[\s\-\(\)]+/g, '');
      e.target.value = e.target.value.replace(/[^0-9\(\-\)\+]+/g, '');
    });
  });
};

const checkPhone = (elem) => {
  let count = 0;
  let len = 0;
  let arr = [];

  arr = elem.value.split('');
  arr.forEach((item, index) => {
    if (/[0-9]/.test(item)) {
      count++;
    }

    if (count <= 13) {
      len = index + 1;
    }
  });

  elem.value = arr.join('').slice(0, len);
  if (count < 11) {
    return true;
  } else {
    return false;
  }
};

export { validation, checkPhone };