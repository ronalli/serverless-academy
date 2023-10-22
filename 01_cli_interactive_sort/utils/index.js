const helpFunction = (array, flag) => {
  if (flag === 'word') {
    return array.filter((item) => item.match(/^[a-zA-Z]+$/g));
  }
  if (flag === 'number') {
    return array.filter((item) =>
      item.match(/^[-+]?(?:(?:0|[1-9]\d*)(?:[.]\d+)?|[1-9]\d*)$/g)
    );
  }
};

export const sortWordsToLenght = (array) => {
  return helpFunction(array, 'word').sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });
};

export const uniqueSet = (array) => {
  return [...new Set(array)];
};

export const uniqueWordsSet = (array) => {
  return uniqueSet(helpFunction(array, 'word'));
};

export const sortWordsAlpha = (array) => {
  const arr = helpFunction(array, 'word');
  return arr.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    return 0;
  });
};

export const sortNumbers = (array, flag) => {
  const arr = helpFunction(array, 'number');
  if (flag === 'ltg') return arr.sort((a, b) => a - b);
  if (flag === 'bts') return arr.sort((a, b) => b - a);
  return array;
};
