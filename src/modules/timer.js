const timer = (deadline) => {
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

  const showStartTime = () => {
    const getStartTime = getTimeRemaining();
    timerHours.innerText = getStartTime.hours < 10 ? `0${getStartTime.hours}` : getStartTime.hours;
    timerMinutes.innerText = getStartTime.minuts < 10 ? `0${getStartTime.minuts}` : getStartTime.minuts;
    timerSeconds.innerText = getStartTime.seconds < 10 ? `0${getStartTime.seconds}` : getStartTime.seconds;
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerHours.innerText = getTime.hours < 10 ? `0${getTime.hours}` : getTime.hours;
      timerMinutes.innerText = getTime.minuts < 10 ? `0${getTime.minuts}` : getTime.minuts;
      timerSeconds.innerText = getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;
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