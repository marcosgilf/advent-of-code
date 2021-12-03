import { expect } from 'chai';
import {
  multiplyGammaAndEpsilonRates,
  multiplyOxygenAndCo2Ratings,
  getOxygenGeneratorRating,
  getCO2ScrubberRating,
} from '../diagnosis.js';
import { txtToArrayOfStrings } from '../../../utils/inputConverter.js';

// https://adventofcode.com/2021/day/3
describe('Day 3: Binary Diagnostic', () => {
  describe('Part 1', () => {
    it('should return what is the power consumption of the submarine?', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/test/example.txt');
      expect(multiplyGammaAndEpsilonRates(input)).to.equal(198);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/input.txt');
      expect(multiplyGammaAndEpsilonRates(input)).to.equal(4001724);
    });
  });

  describe('Part 2', () => {
    it('should provide oxygen generator rating', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/test/example.txt');
      expect(getOxygenGeneratorRating(input)).to.equal(23);
    });

    it('should provide CO2 scrubber rating', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/test/example.txt');
      expect(getCO2ScrubberRating(input)).to.equal(10);
    });

    it('should what is the life support rating of the submarine?', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/test/example.txt');
      expect(multiplyOxygenAndCo2Ratings(input)).to.equal(230);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day3/input.txt');
      expect(multiplyOxygenAndCo2Ratings(input)).to.equal(587895);
    });
  });
});
