import { sumOnesInString, getIndexesOfString } from './string.js';

export const changeRowsForColumns = arr => {
  let counter = 0;
  const adaptedBits = [];

  while (counter < arr[0].length) {
    arr.forEach(element => {
      adaptedBits[counter] = adaptedBits[counter]
        ? adaptedBits[counter].concat(element[counter])
        : element[counter];
    });
    counter += 1;
  }

  return adaptedBits;
};

export const filterFewerBitInIndex = (bits, index) => {
  const adaptedBits = changeRowsForColumns(bits);
  const reference = sumOnesInString(adaptedBits[index]);
  let indexesToFilter = [];

  if (reference === bits.length / 2) {
    // same
    indexesToFilter = getIndexesOfString(adaptedBits[index], '0');
  } else if (reference > bits.length / 2) {
    // more ones
    indexesToFilter = getIndexesOfString(adaptedBits[index], '0');
  } else {
    // more zeros
    indexesToFilter = getIndexesOfString(adaptedBits[index], '1');
  }

  return bits.filter((_, index) => !indexesToFilter.includes(index));
};

export const filterManyBitInIndex = (bits, index) => {
  const adaptedBits = changeRowsForColumns(bits);
  const reference = sumOnesInString(adaptedBits[index]);
  let indexesToFilter = [];

  if (reference === bits.length / 2) {
    // same
    indexesToFilter = getIndexesOfString(adaptedBits[index], '1');
  } else if (reference > bits.length / 2) {
    // more ones
    indexesToFilter = getIndexesOfString(adaptedBits[index], '1');
  } else {
    // more zeros
    indexesToFilter = getIndexesOfString(adaptedBits[index], '0');
  }

  return bits.filter((_, index) => !indexesToFilter.includes(index));
};
