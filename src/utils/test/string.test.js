import { expect } from 'chai';
import { sumOnesInString, getIndexesOfString } from '../string.js';

describe('String Utils', () => {
  it('should count "1" in a string', () => {
    expect(sumOnesInString('0010100')).to.equal(2);
  });

  it('should return indexes of an element', () => {
    expect(getIndexesOfString('01001101', '1')).to.deep.equal([1, 4, 5, 7]);
  });
});
