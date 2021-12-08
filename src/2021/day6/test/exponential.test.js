import { expect } from 'chai';
import {
  getLanternfishFromInputAfterGivenDays,
  getLanternfishFromInputAfterGivenDaysV2,
} from '../exponential.js';
import { txtToArrayOfStrings } from '../../../utils/inputConverter.js';

// https://adventofcode.com/2021/day/6
describe('Day 6: Lanternfish', () => {
  describe('Part 1', () => {
    it('should return total fish after 12 days', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/test/example.txt');
      expect(getLanternfishFromInputAfterGivenDays(input, 18)).to.equal(26);
    });

    it('should return total fish after 12 days V2', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/test/example.txt');
      expect(getLanternfishFromInputAfterGivenDaysV2(input, 18)).to.equal(26);
    });

    it('should return total fish after 80 days', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/test/example.txt');
      expect(getLanternfishFromInputAfterGivenDays(input, 80)).to.equal(5934);
    });

    it('should return total fish after 80 days V2', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/test/example.txt');
      expect(getLanternfishFromInputAfterGivenDaysV2(input, 80)).to.equal(5934);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/input.txt');
      expect(getLanternfishFromInputAfterGivenDays(input, 80)).to.equal(360610);
    });

    it('should provide the answer V2', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/input.txt');
      expect(getLanternfishFromInputAfterGivenDaysV2(input, 80)).to.equal(360610);
    });
  });

  describe('Part 2', () => {
    it('should return total fish after 256 days', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/test/example.txt');
      expect(getLanternfishFromInputAfterGivenDaysV2(input, 256)).to.equal(26984457539);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day6/input.txt');
      expect(getLanternfishFromInputAfterGivenDaysV2(input, 256)).to.equal(1631629590423);
    });
  });
});
