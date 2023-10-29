import fs from 'fs';
import readLine from 'readline';

// const readerStream = fs.createReadStream()

const arr = [];

// const set = new Set();

// const readTextFile = (pathFile, i) => {
//   const stream = fs.createReadStream(pathFile, { encoding: 'utf-8' });
//   stream.on('data', (chunk) => {
//     const data = chunk.split('\n');
//     data.forEach((element) => {
//       set.add(element);
//     });
//   });
//   stream.on('end', () => {
//     arr.push(set);
//     console.log(arr.length);
//   });
// };

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

const run = async () => {
  try {
    for (let i = 0; i < 19; i++) {
      const data = await readTextFile(`./files/out${i}.txt`, i);
      arr.push(data);
    }
  } catch (error) {
    console.log(error);
  }

  console.log(arr.length);
};

run();

// console.log(arr.length);
