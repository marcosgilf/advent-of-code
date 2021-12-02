import { expect } from 'chai';
import {
  multiplyFinalHorizontalPositionAndDepth,
  multiplyFinalHorizontalPositionAndDepthWithAim,
} from '../position.js';
import { txtToArrayOfStrings } from '../../../utils/inputConverter.js';

// https://adventofcode.com/2021/day/2
describe('Day 2: Dive!', () => {
  describe('Part 1', () => {
    it('should return what do you get if you multiply your final horizontal position by your final depth', () => {
      const input = txtToArrayOfStrings('./src/2021/day2/test/example.txt');
      expect(multiplyFinalHorizontalPositionAndDepth(input)).to.equal(150);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day2/input.txt');
      expect(multiplyFinalHorizontalPositionAndDepth(input)).to.equal(1989265);
    });
  });

  describe('Part 2', () => {
    it('should count the number of times the sum of measurements in 3 elements sliding window increases', () => {
      const input = txtToArrayOfStrings('./src/2021/day2/test/example.txt');
      expect(multiplyFinalHorizontalPositionAndDepthWithAim(input)).to.equal(900);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day2/input.txt');
      expect(multiplyFinalHorizontalPositionAndDepthWithAim(input)).to.equal(2089174012);
    });
  });
});
