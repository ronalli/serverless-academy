export const uniqueValues = (array, allNames) => {
  for (const data of array) {
    data.forEach((item) => allNames.add(item));
  }
  return allNames.size;
};

export const existInAllFiles = (array, allNames) => {
  let username = 0;
  for (const name of allNames) {
    let count = 0;
    for (const item of array) {
      if (item.has(name)) {
        count++;
      }
    }
    if (count === 20) {
      username++;
    }
  }
  return username;
};

export const existInAtleastTen = (array, allNames) => {
  let username = 0;
  for (const name of allNames) {
    let count = 0;
    for (const item of array) {
      if (item.has(name)) {
        count++;
      }
    }
    if (count >= 10) {
      username++;
    }
  }
  return username;
};
