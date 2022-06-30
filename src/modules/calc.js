import { animate } from './helper';

const calc = (price) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');
  const calcItem = document.querySelectorAll('.calc-item');

  let current = 0;
  let prev = 0;

  const countCalcType = () => {
    if (calcType.options[calcType.selectedIndex].value != '') {
      return +calcType.options[calcType.selectedIndex].value;
    } else {
      return 0;
    }
  };

  const countCalcSquare = () => {
    if (calcSquare.value != '' && !isNaN(calcSquare.value)) {
      return calcSquare.value;
    } else {
      return 0;
    }
  };

  const countCalcCount = () => {
    if (calcCount.value != '' && calcCount.value != '1') {
      if (isNaN(calcCount.value)) {
        return 0;
      }
      return 1 + (+calcCount.value / 10);
    } else {
      return 1;
    }
  };

  const countCalcDay = () => {
    if (calcDay.value != '') {
      if (isNaN(calcDay.value)) {
        return 0;
      }
      if (+calcDay.value < 5) {
        return 2;
      }
      if (+calcDay.value < 10) {
        return 1.5;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  };

  const debounce = (func, ms) => {
    let indexTimeout;

    return () => {
      clearTimeout(indexTimeout);
      indexTimeout = setTimeout(func, ms);
    };
  };

  const animCalc = () => {
    prev = current;
    current = Math.round(price * countCalcType() * countCalcSquare() * countCalcCount() * countCalcDay());

    if (current !== prev) {
      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.innerText = Math.round(prev + (current - prev) * progress);
        }
      });
    }
  };

  calcBlock.addEventListener('input', debounce(animCalc, 400));

  calcItem.forEach(item => {
    item.addEventListener('blur', () => {
      animCalc();
    });
  });
};

export default calc;