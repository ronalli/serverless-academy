import axios from 'axios';

const URL_MONO = 'https://api.monobank.ua/bank/currency';
const URL_PRIVAT =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const getRatesMono = async () => {
  const response = await axios.get(URL_MONO);
  return response;
};

export const getRatesPrivat = async () => {
  const response = await axios.get(URL_PRIVAT);
  return response;
};
