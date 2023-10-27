// export env $(cat .env | xargs)

import telegram from 'node-telegram-bot-api';
import { getWeather } from './api/index.js';
import { dataProcessing, printHTML } from './utils/helpFucntion.js';
import { mainKeyboard, intervalKeyboard } from './utils/keyboards.js';

const TOKEN = process.env.API_TOKEN || '';

const bot = new telegram(TOKEN, { polling: true });

bot.on('text', async (msg) => {
  if (msg.text === '/start' || msg.text === 'Back') {
    await bot.sendMessage(msg.chat.id, 'Hello, hi, this is a weather bot', {
      reply_markup: {
        keyboard: mainKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (msg.text === 'Forecast in Dnipro') {
    await bot.sendMessage(msg.chat.id, 'Intervals', {
      reply_markup: {
        keyboard: intervalKeyboard,
        resize_keyboard: true,
      },
    });
  } else if (msg.text === 'at intervals of 3 hours') {
    const response = await getWeather();
    const formatData = dataProcessing(response.list);
    await bot.sendMessage(msg.chat.id, `Name: ${response['city']['name']}`);
    for (const item of formatData) {
      await bot.sendMessage(msg.chat.id, printHTML(item), {
        parse_mode: 'HTML',
      });
    }
  } else if (msg.text === 'at intervals of 6 hours') {
    const response = await getWeather();
    const formatData = dataProcessing(response.list);
    await bot.sendMessage(msg.chat.id, `Name: ${response['city']['name']}`);
    let count = 0;
    for (const item of formatData) {
      if (count % 2 === 0) {
        await bot.sendMessage(msg.chat.id, printHTML(item), {
          parse_mode: 'HTML',
        });
      }
      count++;
    }
  }
});
