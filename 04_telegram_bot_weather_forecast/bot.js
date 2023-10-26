// export env $(cat .env | xargs)

import telegram from 'node-telegram-bot-api';
import { getWeather } from './api/index.js';

const token = process.env.TOKEN || null;

const bot = new telegram(token, { polling: true });

import { weather } from './utils/icon.js';

const mainKeyboard = [
  [{ text: 'Forecast in Dnipro', callback_data: 'forecast' }],
];

const intervalKeyboard = [
  ['at intervals of 3 hours'],
  ['at intervals of 6 hours'],
];

bot.on('text', async (msg) => {
  if (msg.text === '/start') {
    bot.sendMessage(msg.chat.id, 'Hello, hi, this is a weather bot', {
      reply_markup: {
        keyboard: mainKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (msg.text === 'Forecast in Dnipro') {
    bot.sendMessage(msg.chat.id, 'Intervals', {
      reply_markup: {
        keyboard: intervalKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (msg.text === 'at intervals of 3 hours') {
    const data = await getWeather();
    const set = new Set();
    for (let item of data.list) {
      const obj = {};
      obj['date'] = new Date(item['dt'] * 1000).toLocaleString();
      obj['temp'] = (+item['main']['temp'] - 273.15).toFixed(1) + 'ºC';
      obj['weather'] = `${weather[item['weather'][0]['main'].toLowerCase()]}${
        item['weather'][0]['main']
      }|${item['weather'][0]['description']}|`;
      obj['speed_wind'] = item['wind']['speed'];
      set.add(obj);
    }
    await bot.sendMessage(msg.chat.id, `Name: ${data['city']['name']}`);
    let count = 0;
    for (const item of set) {
      count++;
      await bot.sendMessage(msg.chat.id, JSON.stringify(item));
      if (count === 7) break;
    }
  } else if (msg.text === 'at intervals of 6 hours') {
  }
});
