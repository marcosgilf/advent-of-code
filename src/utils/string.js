export const sumOnesInString = str => {
  let sum = 0;
  [...str].forEach(item => {
    if (item === '1') {
      sum += 1;
    }
  });
  return sum;
};

export const getIndexesOfString = (str, reference) => {
  const indexes = [];
  [...str].forEach((item, index) => {
    if (item === reference) {
      indexes.push(index);
    }
  });
  return indexes;
};
