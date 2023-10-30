import data from './src/data.json' assert { type: 'json' };
import { createObj, formatData } from './utils/index.js';

const map = new Map();

for (const item of data) {
  if (map.has(item.user['_id'])) {
    const obj = map.get(item.user['_id']);
    obj.vacation.push({ startDate: item.startDate, endDate: item.endDate });
    map.set(item.user['_id'], obj);
  } else {
    map.set(item.user['_id'], createObj(item));
  }
}

console.log(formatData(map));
