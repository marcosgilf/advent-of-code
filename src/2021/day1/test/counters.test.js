import { expect } from '@open-wc/testing';
import { countWhenNumberIncreases, countWhenNumberIncreasesByWindow } from '../counters.js';
import { input } from '../input.js';

const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('Day 1: Sonar Sweep', () => {
  describe('Part 1', () => {
    it('should count the number of times a depth measurement increases', () => {
      expect(countWhenNumberIncreases(example)).to.equal(7);
    });

    it('should provide the answer', () => {
      expect(countWhenNumberIncreases(input)).to.equal(1475);
    });
  });

  describe('Part 2', () => {
    it('should count the number of times the sum of measurements in 3 elements sliding window increases', () => {
      expect(countWhenNumberIncreasesByWindow(example)).to.equal(5);
    });

    it('should provide the answer', () => {
      expect(countWhenNumberIncreasesByWindow(input)).to.equal(1516);
    });
  });
});
