import axios from 'axios';
import {
  formatCurrencyMono,
  formatCurrencyPrivat,
} from '../utils/helpFucntion.js';

const URL_MONO = 'https://api.monobank.ua/bank/currency';
const URL_PRIVAT =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const getRatesMono = async () => {
  const response = await axios.get(URL_MONO);
  return formatCurrencyMono(response.data.slice(0, 2));
};

export const getRatesPrivat = async () => {
  const response = await axios.get(URL_PRIVAT);

  return formatCurrencyPrivat(response.data);
};

export const getExchangeRatesUSD = () => {};

export const getExchangeRatesEUR = async () => {
  const data = await axios.all([getRatesMono(), getRatesPrivat()]);
  console.log(data);
};
