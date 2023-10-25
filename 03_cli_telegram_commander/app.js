// export env $(cat .env | xargs)

import { program } from 'commander';
import fs from 'fs';

import { bot } from './bot.js';

const parseChatId = () => {
  return JSON.parse(fs.readFileSync('./chatId.txt', 'utf-8'));
};

program
  .name('telegram-cli')
  .description('CLI Telegram Console Sender')
  .version('0.2.0');

program
  .command('messsage <message>')
  .alias('m')
  .description('Send message to Telegram Bot')
  .action((text) => {
    const chatId = parseChatId();
    bot.sendMessage(chatId, text).then(() => {
      process.exit(program);
    });
  });

program
  .command('photo <path>')
  .alias('p')
  .description(
    'Send photo to Telegram Bot. Jsut drag and drop it console after p-flag'
  )
  .action((path) => {
    const chatId = parseChatId();
    const data = fs.readFileSync(path);
    bot.sendPhoto(chatId, data).then(() => {
      process.exit(program);
    });
  });

program.parse(process.argv);
