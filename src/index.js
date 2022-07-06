import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scrolling from './modules/scroll';
import arrow from './modules/arrow';
import placeholder from './modules/placeholder';
import validation from './modules/validation';
import tab from './modules/tab';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('07 july 2022 20:00:00');
menu();
modal();
scrolling();
arrow();
placeholder();
validation();
tab();
slider('portfolio-content', 'portfolio-item', 'portfolio-item-active');
calc(100);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'select',
      id: 'calc-type'
    }
  ]
});
sendForm({ formId: 'form3', });