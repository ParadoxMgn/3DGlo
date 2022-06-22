const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let idInterval;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 60 / 60 % 24);
    const minuts = Math.floor(timeRemaining / 60 % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return { days, hours, minuts, seconds, timeRemaining };
  };

  const timeRemaining = getTimeRemaining();

  const getCountDays = () => {
    const getStartTime = getTimeRemaining();

    if (getStartTime.days <= 0) {
      return '';
    }

    if (getStartTime.days.toString().slice(-1) === '1' && getStartTime.days.toString().slice(-2) !== '11') {

      return `${getStartTime.days} день`;
    } else {
      if (getStartTime.days.toString().slice(-1) === '2' && getStartTime.days.toString().slice(-2) !== '12' || getStartTime.days.toString().slice(-1) === '3' && getStartTime.days.toString().slice(-2) !== '13' || getStartTime.days.toString().slice(-1) === '4' && getStartTime.days.toString().slice(-2) !== '14') {

        return `${getStartTime.days} дня`;
      } else {

        return `${getStartTime.days} дней`;
      }
    }
  };

  const addZero = num => {
    const getStartTime = getTimeRemaining();

    if (getStartTime.timeRemaining > 0) {
      const str = num < 10 ? '0' + num : num;

      return str;
    } else {
      return '00';
    }
  };

  const updateClock = () => {
    const getStartTime = getTimeRemaining();

    timerDays.innerText = getCountDays();
    timerHours.innerText = addZero(getStartTime.hours);
    timerMinutes.innerText = addZero(getStartTime.minuts);
    timerSeconds.innerText = addZero(getStartTime.seconds);

    if (getStartTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    }
    console.log(1);
  };

  updateClock();

  if (timeRemaining.timeRemaining > 0) {
    idInterval = setInterval(updateClock, 1000);
  }
};

export default timer;