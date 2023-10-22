import * as readLine from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import {
  sortNumbers,
  sortWordsAlpha,
  sortWordsToLenght,
  uniqueSet,
  uniqueWordsSet,
} from './utils/index.js';

import { typeSort } from './data.js';

const rl = readLine.createInterface({ input, output });

const run = () => {
  rl.question(
    'Hello. Enter 10 words or digits deviding them in spaces: ',
    (input) => {
      const array = input.split(' ');
      console.log('\nHow would you like to sort values:');
      typeSort.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
      rl.question('\nSelect (1-6) and press Enter: ', (index) => {
        let num = index;
        switch (num) {
          case '1': {
            console.log(sortWordsAlpha(array));
            break;
          }
          case '2': {
            console.log(sortNumbers(array, 'ltg'));
            break;
          }
          case '3': {
            console.log(sortNumbers(array, 'bts'));
            break;
          }
          case '4': {
            console.log(sortWordsToLenght(array));
            break;
          }
          case '5': {
            console.log(uniqueWordsSet(array));
            break;
          }
          case '6': {
            console.log(uniqueSet(array));
            break;
          }
          case '7':
          case 'exit': {
            console.log('Good bye! Come back again!');
            return rl.close();
          }
          default: {
            console.log('Something went wrong - try again');
            break;
          }
        }
        run();
      });
    }
  );
};

run();
