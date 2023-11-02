import axios from 'axios';
import { arrEndpoint } from './endpoints/index.js';
import { searchFlag } from './utils/index.js';

arrEndpoint.forEach(async (endpoint) => {
  let flag = true;
  let response = null;
  let count = 3;
  while (flag) {
    try {
      response = await axios.get(endpoint);
      if (response.status === 200) {
        const result = searchFlag(response.data);
        console.log(`[Success] ${endpoint}: isDone: ${result}`);
        flag = false;
        break;
      }
    } catch (error) {
      if (count === 1) {
        console.log(`[Fail] ${endpoint}: The endpoint is unavailable`);
        break;
      }
      count--;
    }
  }
});
