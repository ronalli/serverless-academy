export const searchFlag = (obj) => {
  if (typeof obj !== 'object' || obj === null) return null;
  if (obj.hasOwnProperty('isDone')) return obj['isDone'];

  for (const key in obj) {
    let result = searchFlag(obj[key]);
    if (result !== null) {
      return result;
    }
  }
  return null;
};
