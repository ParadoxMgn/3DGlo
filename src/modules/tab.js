const tab = () => {
  const serviceHeader = document.querySelector('.service-header');
  const serviceHeaderTab = document.querySelectorAll('.service-header-tab');
  const serviceTab = document.querySelectorAll('.service-tab');

  serviceHeader.addEventListener('click', e => {
    serviceHeaderTab.forEach((tab, index) => {
      if (e.target.closest('.service-header-tab') === tab) {
        tab.classList.add('active');
        serviceTab[index].classList.remove('d-none');
      } else {
        tab.classList.remove('active');
        serviceTab[index].classList.add('d-none');
      }
    });
  });
};

export default tab;