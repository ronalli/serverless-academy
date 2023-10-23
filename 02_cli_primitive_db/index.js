import inquirer from 'inquirer';
import fs, { constants } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const helpFunction = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'searchUser',
        message: 'Would you like to search values in BD?',
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((err) => {
      console.log(err);
    });
};

const questions = [
  {
    type: 'input',
    name: 'userName',
    message: "Enter user's name. To cancel press ENTER: ",
    // validate: helpFunction,
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
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valide age';
      }
      return true;
    },
  },
];

const run = () => {
  const promt = inquirer.prompt(questions);
  promt
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
    .catch((err) => {
      // if (err === 'Press enter')
      console.log(err);
      // helpFunction();
    });

  process.stdin.on('keypress', (_, key) => {
    if (key.name === 'return') {
      promt.ui.close();
      helpFunction();
    }
  });
};

run();
