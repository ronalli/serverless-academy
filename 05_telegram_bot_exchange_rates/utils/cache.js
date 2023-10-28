import NodeCache from 'node-cache';

const myCache = new NodeCache({ stdTTL: 70 });

export default myCache;
