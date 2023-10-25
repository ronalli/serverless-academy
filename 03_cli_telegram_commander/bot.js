// export env $(cat .env | xargs)

import telegram from 'node-telegram-bot-api';
import fs from 'fs';

const token = process.env.TOKEN || null;

export const bot = new telegram(token, {
  polling: true,
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  fs.writeFileSync('./chatId.txt', JSON.stringify(chatId));
});
