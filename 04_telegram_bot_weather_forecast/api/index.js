import axios from 'axios';

const LAT = '48.450001';
const LON = '34.983334';

const API_KEY = process.env.API_KEY
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

export const getWeather = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};
