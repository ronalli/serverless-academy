import inquirer from 'inquirer';
import fs, { constants } from 'fs';
import {
  mainQuestions,
  questionPrintDatabase,
  questionSearchUser,
} from './data/questions.js';

const searchUser = () => {
  const prompt = inquirer.prompt(questionSearchUser);
  prompt.then((answer) => {
    const name = answer.username;
    const data = JSON.parse(fs.readFileSync('./db.txt', 'utf-8'));
    for (let item of data) {
      if (item.user.toLowerCase() === name.toLowerCase()) {
        console.log(`User ${name} was found`);
        console.log(item);
        process.exit();
      }
    }
    console.log(`User ${name} was't found`);
    process.exit();
  });
};

const printDatabase = () => {
  const prompt = inquirer.prompt(questionPrintDatabase);
  prompt.then((answers) => {
    if (!answers.printBD) {
      process.exit();
    } else {
      fs.access('./db.txt', constants.F_OK, (err) => {
        const data = JSON.parse(fs.readFileSync('./db.txt', 'utf-8'));
        console.log(data);
        searchUser();
      });
    }
  });
};

const run = async () => {
  const obj = {};
  for (let item of mainQuestions) {
    const answer = await inquirer.prompt(item);
    if (answer.user === '') {
      break;
    }
    for (const [key, value] of Object.entries(answer)) {
      obj[key] = value;
    }
  }
  if (!Object.keys(obj).length) {
    printDatabase();
  } else {
    fs.access('./db.txt', constants.F_OK, (err) => {
      if (err) {
        const data = [];
        data.push(obj);
        fs.writeFileSync('./db.txt', JSON.stringify(data));
      } else {
        const data = JSON.parse(fs.readFileSync('./db.txt', 'utf-8'));
        data.push(obj);
        fs.writeFileSync('./db.txt', JSON.stringify(data));
      }
    });
    run();
  }
};

run();
