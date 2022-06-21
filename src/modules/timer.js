const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

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

  const getCountDays = () => {
    const getStartTime = getTimeRemaining();

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

  const showStartTime = () => {
    const getStartTime = getTimeRemaining();

    timerDays.innerText = getStartTime.days === 0 ? `` : getCountDays();
    timerHours.innerText = getStartTime.hours < 10 ? `0${getStartTime.hours}` : getStartTime.hours;
    timerMinutes.innerText = getStartTime.minuts < 10 ? `0${getStartTime.minuts}` : getStartTime.minuts;
    timerSeconds.innerText = getStartTime.seconds < 10 ? `0${getStartTime.seconds}` : getStartTime.seconds;
  };

  const updateClock = () => {
    const getStartTime = getTimeRemaining();

    if (getStartTime.timeRemaining > 0) {
      timerDays.innerText = getStartTime.days === 0 ? `` : getCountDays();
      timerHours.innerText = getStartTime.hours < 10 ? `0${getStartTime.hours}` : getStartTime.hours;
      timerMinutes.innerText = getStartTime.minuts < 10 ? `0${getStartTime.minuts}` : getStartTime.minuts;
      timerSeconds.innerText = getStartTime.seconds < 10 ? `0${getStartTime.seconds}` : getStartTime.seconds;
    } else {
      timerHours.innerText = '00';
      timerMinutes.innerText = '00';
      timerSeconds.innerText = '00';
    }
  };

  showStartTime();

  setInterval(updateClock, 1000);


};

export default timer;