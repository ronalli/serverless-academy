import axios from 'axios';
import { arrEndpoint } from './endpoints/index.js';
import { searchFlag } from './utils/index.js';

// const axiosRequest = async (url) => {
//   const response = await axios.get(`${url}`);
//   return response.data;
// };

arrEndpoint.forEach(async (endpoint) => {
  let flag = true;
  let response = null;
  let count = 3;
  while (flag) {
    try {
      response = await axios.get(endpoint);
      if (response.status === 200) {
        console.log(searchFlag(response.data));
        console.log(`[Success] ${endpoint}: isDone: true/false`);
        flag = false;
        break;
      }
    } catch (error) {
      console.log(error);
      if (count === 1) {
        console.log(`[Fail] ${endpoint}: The endpoint is unavailable`);
        break;
      }
      count--;
    }
  }
});
