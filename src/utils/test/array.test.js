import { expect } from 'chai';
import { changeRowsForColumns, filterFewerBitInIndex, filterManyBitInIndex } from '../array.js';

describe('Array Utils', () => {
  describe('changeRowsForColumns', () => {
    it('should change row for columns', () => {
      expect(changeRowsForColumns(['001', '101'])).to.deep.equal(['01', '00', '11']);
    });
  });

  describe('filterFewerBitInIndex', () => {
    it('should filter element with "0" at the provided index', () => {
      expect(filterFewerBitInIndex(['001', '101'], 0)).to.deep.equal(['101']);
    });

    it('should filter element with fewer "0" or "1" at the provided index', () => {
      expect(filterFewerBitInIndex(['001', '010', '111'], 1)).to.deep.equal(['010', '111']);
    });
  });

  describe('filterManyBitInIndex', () => {
    it('should filter element with "1" at the provided index', () => {
      expect(filterManyBitInIndex(['001', '101'], 0)).to.deep.equal(['001']);
    });

    it('should filter element with many "0" or "1" at the provided index', () => {
      expect(filterManyBitInIndex(['001', '010', '111'], 1)).to.deep.equal(['001']);
    });
  });
});
