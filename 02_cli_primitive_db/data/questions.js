import { validateAge } from '../utils/index.js';

export const mainQuestions = [
  {
    type: 'input',
    name: 'user',
    message: "Enter user's name. To cancel press ENTER: ",
  },
  {
    type: 'list',
    name: 'gender',
    message: 'Choose your Gender: ',
    choices: ['male', 'female'],
  },
  {
    type: 'input',
    name: 'age',
    message: 'Enter your age: ',
    validate: validateAge,
  },
];

export const questionPrintDatabase = [
  {
    type: 'confirm',
    name: 'printBD',
    message: 'Would you like to search values in BD?',
  },
];

export const questionSearchUser = [
  {
    type: 'input',
    name: 'username',
    message: "Enter user's name you wanna find in BD: ",
  },
];
