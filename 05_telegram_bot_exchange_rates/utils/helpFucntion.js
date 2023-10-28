import { code } from './codeCurrency.js';
import { weather } from './icon.js';

export const dataProcessing = (obj) => {
  const set = new Set();
  for (let item of obj) {
    const obj = {};
    obj['date'] = new Date(item['dt'] * 1000).toLocaleString();
    obj['temp'] = (+item['main']['temp'] - 273.15).toFixed(1) + 'ºC';
    obj['weather'] = `${weather[item['weather'][0]['main'].toLowerCase()]}${
      item['weather'][0]['main']
    }|${item['weather'][0]['description']}`;
    obj['speed_wind'] = item['wind']['speed'];
    set.add(obj);
  }
  return set;
};

export const printHTML = (item) => {
  return `Date: ${item['date']}, temperature: ${item['temp']}, weather: ${item['weather']}, speed wind: ${item['speed_wind']}`;
};

export const getMono = () => {};

export const getPrivat = () => {};

export const formatCurrencyMono = (arr) => {
  const obj = new Map();
  for (const item of arr) {
    obj.set(
      code[item.currencyCodeA],
      `Bank: Monobank, Currency: ${code[item.currencyCodeA]}, buy: ${
        item.rateBuy
      }, sale: ${item.rateSell}`
    );
    // obj[code[item.currencyCodeA]] = `Bank: Monobank, Currency: ${
    //   code[item.currencyCodeA]
    // }, buy: ${item.rateBuy}, sale: ${item.rateSell}`;
  }
  return obj;
};

export const formatCurrencyPrivat = (arr) => {
  const obj = new Map();
  for (const item of arr) {
    obj.set(
      item.ccy,
      `Bank: Privatbank, Currency: ${item.ccy}, buy: ${item.buy}, sale: ${item.sale}`
    );
    // obj[
    //   item.ccy
    // ] = `Bank: Monobank, Currency: ${item.ccy}, buy: ${item.buy}, sale: ${item.sale}`;
  }
  return obj;
};
