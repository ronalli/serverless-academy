import {
  uniqueValues,
  existInAllFiles,
  existInAtleastTen,
  readTextFile,
} from './utils/index.js';

const arrayNames = [];
const allUniqueNames = new Set();

const startTime = new Date().getTime();

for (let i = 0; i < 20; i++) {
  const data = await readTextFile(`./files/out${i}.txt`);
  arrayNames.push(data);
}

const uniqueNames = uniqueValues(arrayNames, allUniqueNames);
const existNamesAllFiles = existInAllFiles(arrayNames, allUniqueNames);
const existNamesTenFiles = existInAtleastTen(arrayNames, allUniqueNames);

const endTime = new Date().getTime();

console.log(uniqueNames, existNamesAllFiles, existNamesTenFiles);

console.log(`${endTime - startTime} seconds`);
