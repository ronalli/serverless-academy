import axios from 'axios';
import { arrEndpoint } from './endpoints/index.js';

const fetchData = async (url, count) => {
  let error = null;
  let result = null;
  count--;
  await axios
    .get(`${url}`)
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      error = err;
    });
  if (count === 1) {
    return error ? Promise.reject('Fail') : Promise.resolve('Success');
  }
  return fetchData(url, count);
};

for (const url of arrEndpoint) {
  await fetchData(url, 3)
    .then((res) => {
      console.log(`[${res}] ${url}: isDone: true/false`);
    })
    .catch((err) => {
      console.log(`[${err}] ${url}: The endpoint is unavailable`);
    });
}
