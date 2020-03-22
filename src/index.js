import './styles/style.scss';
import months from './js/doathing';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const baseUrl =
  'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '7ac846b1627ac681186c50292ce4d755';

console.log('whut');
console.log(months());
tippy('[data-tippy-content]');

const fetchWeatherData = async () => {
  const data = await fetch(
    `${baseUrl}?zip=23225&units=imperial&appid=${apiKey}`
  );
  console.log(data);
};

fetchWeatherData();
