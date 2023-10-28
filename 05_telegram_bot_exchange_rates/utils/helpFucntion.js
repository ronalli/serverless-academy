import { code } from './codeCurrency.js';
import { currency, weather } from './icon.js';

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

export const formatCurrencyMono = (arr) => {
  const obj = new Map();
  for (const item of arr) {
    obj.set(
      code[item.currencyCodeA],
      `${currency[code[item.currencyCodeA]]} Bank: Monobank, buy: ${Number(
        item.rateBuy
      ).toFixed(2)}, sale: ${Number(item.rateSell).toFixed(2)}`
    );
  }
  return obj;
};

export const formatCurrencyPrivat = (arr) => {
  const obj = new Map();
  for (const item of arr) {
    obj.set(
      item.ccy,
      `${currency[item.ccy]} Bank: Privatbank, buy: ${Number(item.buy).toFixed(
        2
      )}, sale: ${Number(item.sale).toFixed(2)}`
    );
  }
  return obj;
};
