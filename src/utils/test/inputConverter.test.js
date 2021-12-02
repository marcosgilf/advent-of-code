import { expect } from 'chai';
import { txtToArrayOfNumbers, txtToArrayOfStrings } from '../inputConverter.js';

describe('Input converter', () => {
  it('should get txt file and return an array of numbers', () => {
    expect(txtToArrayOfNumbers('./src/utils/test/input.txt')).to.deep.equal([
      199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
    ]);
  });

  it('should get txt file and return an array of strings', () => {
    expect(txtToArrayOfStrings('./src/utils/test/input.txt')).to.deep.equal([
      '199',
      '200',
      '208',
      '210',
      '200',
      '207',
      '240',
      '269',
      '260',
      '263',
    ]);
  });
});
