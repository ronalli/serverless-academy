import axios from 'axios';
import {
  formatCurrencyMono,
  formatCurrencyPrivat,
} from '../utils/helpFucntion.js';

import myCache from '../utils/cache.js';

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

export const getExchangeRatesAll = async () => {
  if (myCache.get('currency')) {
    return myCache.get('currency');
  } else {
    const data = await axios.all([getRatesMono(), getRatesPrivat()]);
    myCache.set('currency', data);
    return data;
  }
};

export const getExchangeRates = async (key) => {
  const data = await getExchangeRatesAll();
  return data.map((item) => item.get(key));
};
