import NodeCache from 'node-cache';

const myCache = new NodeCache({ stdTTL: 60 });

export default myCache;
