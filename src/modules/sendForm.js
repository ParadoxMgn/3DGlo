import { checkPhone } from './validation';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input');
  const btn = form.querySelector('.btn');
  const preLoad = document.createElement('div');
  const message = {
    load: `
    <div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
    </div>`,
    answer: 'Наш менеджер свяжится с вами!',
    error: 'Ошибка, отправки данных!'
  };

  const validate = (inputs) => {
    let success = true;
    inputs.forEach(item => {

      if (item.value.trim() === '' && !item.classList.contains('mess')) {
        item.setCustomValidity('Поле не должно быть пустым!');
      }

      if (item.type === "tel" && item.value.trim() !== '' && checkPhone(item)) {
        item.setCustomValidity('Номер телефона должен быть не меньше 11 цифр!');
      }

      item.addEventListener('invalid', e => {
        item.classList.add('error');
      });

      if (!item.checkValidity()) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      if (val) {
        formBody[key] = val;
      }
    });

    someElem.forEach(item => {
      if (item.type === 'block' && document.getElementById(item.id).textContent !== "0") {
        formBody[item.id] = document.getElementById(item.id).textContent;
      }
      if ((item.type === 'input' || item.type === 'select') && document.querySelector(`.${item.id}`).value.trim()) {
        formBody[item.id] = document.querySelector(`.${item.id}`).value;
      }
    });

    console.log(inputs);

    if (validate(inputs)) {
      preLoad.innerHTML = message.load;
      preLoad.style.color = '#fff';
      form.append(preLoad);

      sendData({ formBody })
        .then(data => {
          inputs.forEach(item => {
            item.value = '';
          });
          preLoad.innerText = message.answer;
        })
        .catch(err => {
          preLoad.innerText = message.error;
        });
    }
  };

  try {
    if (!form) {
      throw new Error('Форма не найдена!');
    }

    btn.addEventListener('click', e => {
      validate(inputs);
    });


    form.addEventListener('input', e => {
      inputs.forEach(item => {
        if (e.target === item) {
          item.classList.remove('error');
          item.setCustomValidity('');
        }
      });
    });


    form.addEventListener('submit', e => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;