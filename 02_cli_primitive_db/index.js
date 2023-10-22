import inquirer from 'inquirer';
import fs, { constants } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    type: 'input',
    name: 'userName',
    message: "Enter user's name. To cancel press ENTER: ",
    validate: (answers) => {
      console.log('fsddf', answers);
      return true;
    },
  },
  {
    type: 'list',
    name: 'gander',
    message: 'Choose your Gender: ',
    choices: ['male', 'female'],
  },
  {
    type: 'input',
    name: 'age',
    message: 'Enter your age: ',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valide age';
      }
      return true;
    },
  },
];


const run = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      fs.access('db.txt', constants.F_OK, (err) => {
        if (err) {
          const data = [];
          data.push(answers);
          fs.writeFileSync('db.txt', JSON.stringify(data));
        } else {
          const data = JSON.parse(fs.readFileSync('./db.txt', 'utf-8'));
          data.push(answers);
          fs.writeFileSync('db.txt', JSON.stringify(data));
        }
      });
      run();
    })
    .catch(() => {
      console.log('fds');
    });
};

run();

