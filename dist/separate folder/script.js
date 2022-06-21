'use strict';

const timeOfDay = document.getElementById('time-of-day');
const dayOfWeek = document.getElementById('day-of-week');
const curentTime = document.getElementById('curent-time');
const timeNewYears = document.getElementById('time-new-years');

const date = new Date();
const dateNewYear = new Date('01.01.2023');

const setTimeOfDay = () => {
  if (date.getHours() >= 0 && date.getHours() < 6) {
    return 'ой ночи';
  }
  if (date.getHours() >= 6 && date.getHours() < 12) {
    return 'ое утро';
  }
  if (date.getHours() >= 12 && date.getHours() < 18) {
    return 'ый день';
  }
  if (date.getHours() >= 18 && date.getHours() < 24) {
    return 'ый вечер';
  }
};

const setdayOfWeek = () => {
  const firstLetter = date.toLocaleString('ru', { weekday: 'long' })[0].toUpperCase();
  const str = date.toLocaleString('ru', { weekday: 'long' }).slice(1);

  return firstLetter + str;
};

const setCurentTime = () => {
  return date.toLocaleTimeString('en');
};

const settimeNewYears = () => {
  const differenceInTimes = (dateNewYear.getTime() - date.getTime()) / 1000;
  const differenceInDays = differenceInTimes / 60 / 60 / 24;
  const countDays = Math.floor(differenceInDays);

  if (countDays.toString().slice(-1) === '1' && countDays.toString().slice(-2) !== '11') {
    return countDays + ' день';
  }
  if (countDays.toString().slice(-1) === '2' && countDays.toString().slice(-2) !== '12' || countDays.toString().slice(-1) === '3' && countDays.toString().slice(-2) !== '13' || countDays.toString().slice(-1) === '4' && countDays.toString().slice(-2) !== '14') {
    return countDays + ' дня';
  }

  return countDays + ' дней';
};

const showTime = () => {
  timeOfDay.innerText = setTimeOfDay();
  dayOfWeek.innerText = setdayOfWeek();
  curentTime.innerText = setCurentTime();
  timeNewYears.innerText = settimeNewYears();
};

showTime();

