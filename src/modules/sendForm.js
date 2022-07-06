const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
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

  const validate = () => {
    let success = true;
    const inputs = form.querySelectorAll('input');

    inputs.forEach(item => {
      if (item.value.trim() === '') {
        success = false;
        alert('Заполните все поля!');
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
    if (validate()) {
      const inputs = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      preLoad.innerHTML = message.load;
      preLoad.style.color = '#fff';
      form.append(preLoad);

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      someElem.forEach(item => {
        if (item.type === 'block') {
          formBody[item.id] = document.getElementById(item.id).textContent;
        }
        if (item.type === 'input' || item.type === 'select') {
          formBody[item.id] = document.querySelector(`.${item.id}`).value;
        }
      });

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
    form.addEventListener('submit', e => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }



};

export default sendForm;