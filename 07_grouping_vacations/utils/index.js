export const formatData = (map) => {
  const result = [];
  for (const [_, value] of map) {
    result.push(value);
  }
  return result;
};

export const createObj = (element) => {
  const obj = {};
  obj['userId'] = element.user['_id'];
  obj['userName'] = element.user['name'];
  obj['vacation'] = [
    {
      startDate: element.startDate,
      endDate: element.endDate,
    },
  ];
  return obj;
};
