import * as readLine from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const typeSort = [
  'Sort words alphabetically',
  'Show numbers from lesser to greater',
  'Show numbers from bigger to smaller',
  'Display words in ascending order by number of letters in the word',
  'Show only unique words',
  'Display only unique values from the set of words and numbers entered by the user',
  'Exit',
];

const helpFunction = (array, flag) => {
  if (flag === 'word') {
    return array.filter((item) => item.match(/^[a-zA-Z]+$/g));
  }
  if (flag === 'number') {
    return array.filter((item) => item.match(/^(\d+|^\d+[.]\d+)$/g));
  }
};

const sortWordsAlpha = (array) => {
  const arr = helpFunction(array, 'word');
};

const sortNumbers = (array) => {
  const arr = helpFunction(array, 'number');
  console.log(arr);
};

const rl = readLine.createInterface({ input, output });

rl.question('Hello. Please 10 words or digitls: ', (input) => {
  const array = input.split(' ');
  console.log('How would you like to sort values:');
  typeSort.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  rl.question('Select (1-6) and press Enter:', (index) => {
    let num = index;
    switch (num) {
      case '1': {
        sortWordsAlpha(array);
        break;
      }
      case '2': {
        sortNumbers(array);
        break;
      }
      case '3': {
        break;
      }
      case '4': {
        break;
      }
      case '5': {
        break;
      }
      case '6': {
        break;
      }
      default: {
        break;
      }
    }
  });
});
