import { sumOnesInString } from '../../utils/string.js';
import {
  changeRowsForColumns,
  filterFewerBitInIndex,
  filterManyBitInIndex,
} from '../../utils/array.js';

export const multiplyGammaAndEpsilonRates = bits => {
  let gamma = '';
  let epsilon = '';
  const adaptedBits = changeRowsForColumns(bits);

  adaptedBits.forEach(element => {
    const reference = sumOnesInString(element);
    if (reference > bits.length / 2) {
      gamma = gamma.concat('1');
      epsilon = epsilon.concat('0');
    } else {
      gamma = gamma.concat('0');
      epsilon = epsilon.concat('1');
    }
  });

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

export const getOxygenGeneratorRating = bits => {
  let rating = [...bits];
  let index = 0;

  while (rating.length !== 1) {
    rating = filterFewerBitInIndex(rating, index);
    index += 1;
  }

  return parseInt(rating[0], 2);
};

export const getCO2ScrubberRating = bits => {
  let rating = [...bits];
  let index = 0;

  while (rating.length !== 1) {
    rating = filterManyBitInIndex(rating, index);
    index += 1;
  }

  return parseInt(rating[0], 2);
};

export const multiplyOxygenAndCo2Ratings = bits => {
  return getOxygenGeneratorRating(bits) * getCO2ScrubberRating(bits);
};
