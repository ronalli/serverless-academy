import fs from 'fs';
import readLine from 'readline';
import {
  uniqueValues,
  existInAllFiles,
  existInAtleastTen,
} from './utils/index.js';

const array = [];
const allNames = new Set();

const readTextFile = (pathFile) => {
  const set = new Set();
  return new Promise((res, rej) => {
    const rl = readLine.createInterface({
      input: fs.createReadStream(pathFile, { encoding: 'utf-8' }),
    });
    rl.on('line', (line) => {
      set.add(line);
    });
    rl.on('close', () => {
      res(set);
    });
    rl.on('error', (err) => rej(err));
  });
};

const startTime = new Date().getTime();
for (let i = 0; i < 20; i++) {
  const data = await readTextFile(`./files/out${i}.txt`, i);
  array.push(data);
}

const uniqueNames = uniqueValues(array, allNames);
const existtNamesAllFiles = existInAllFiles(array, allNames);
const existNamesTenFiles = existInAtleastTen(array, allNames);

const endTime = new Date().getTime();

console.log(uniqueNames, existtNamesAllFiles, existNamesTenFiles);

console.log(`${endTime - startTime} seconds`);
