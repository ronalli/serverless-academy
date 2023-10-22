import * as readLine from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const typeSort = [
  'Sort words alphabetically',
  'Show numbers from lesser to greater',
  'Show numbers from bigger to smaller',
  'Display words in ascending order by number of letters in the word',
  'Show only unique words',
  'Display only unique values from the set of words and numbers entered by the user',
  'Write word "exit"',
];

const helpFunction = (array, flag) => {
  if (flag === 'word') {
    return array.filter((item) => item.match(/^[a-zA-Z]+$/g));
  }
  if (flag === 'number') {
    return array.filter((item) => item.match(/^(\d+|^\d+[.]\d+)$/g));
  }
};

const sortWordsToLenght = (array) => {
  return helpFunction(array, 'word').sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });
};

const uniqueSet = (array) => {
  return [...new Set(array)];
};

const uniqueWordsSet = (array) => {
  return uniqueSet(helpFunction(array, 'word'));
};

const sortWordsAlpha = (array) => {
  const arr = helpFunction(array, 'word');
  return arr.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    return 0;
  });
};

const sortNumbers = (array, flag) => {
  const arr = helpFunction(array, 'number');
  if (flag === 'ltg') return arr.sort((a, b) => a - b);
  if (flag === 'bts') return arr.sort((a, b) => b - a);
  return array;
};

const rl = readLine.createInterface({ input, output });

const run = () => {
  rl.question('Hello. Please 10 words or digitls: ', (input) => {
    const array = input.split(' ');
    console.log('How would you like to sort values:');
    typeSort.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
    rl.question('Select (1-6) and press Enter: ', (index) => {
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
        case 'exit':
        default: {
          return rl.close();
        }
      }
      run();
    });
  });
};

run();
