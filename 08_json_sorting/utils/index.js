export const searchFlag = (obj) => {
  if (obj.hasOwnProperty('isDone')) {
    return obj['isDone'];
  }
  // return true;
};
