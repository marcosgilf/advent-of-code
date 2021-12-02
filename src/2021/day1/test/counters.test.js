import { expect } from 'chai';
import { txtToArrayOfNumbers } from '../../../utils/inputConverter.js';
import { countWhenNumberIncreases, countWhenNumberIncreasesByWindow } from '../counters.js';

// https://adventofcode.com/2021/day/1
describe('Day 1: Sonar Sweep', () => {
  describe('Part 1', () => {
    it('should count the number of times a depth measurement increases', () => {
      const input = txtToArrayOfNumbers('./src/2021/day1/test/example.txt');
      expect(countWhenNumberIncreases(input)).to.equal(7);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfNumbers('./src/2021/day1/input.txt');
      expect(countWhenNumberIncreases(input)).to.equal(1475);
    });
  });

  describe('Part 2', () => {
    it('should count the number of times the sum of measurements in 3 elements sliding window increases', () => {
      const input = txtToArrayOfNumbers('./src/2021/day1/test/example.txt');
      expect(countWhenNumberIncreasesByWindow(input)).to.equal(5);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfNumbers('./src/2021/day1/input.txt');
      expect(countWhenNumberIncreasesByWindow(input)).to.equal(1516);
    });
  });
});
