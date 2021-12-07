import { expect } from 'chai';
import {
  createZeroMatrix,
  getDangerousOverlapsFromStraightLines,
  getDiagramSize,
  getStraightLineFromCoordinates,
  getSlopeFromCoordinates,
  getDangerousOverlaps,
  getLineFromCoordinates,
} from '../coordinates.js';
import { txtToArrayOfStrings } from '../../../utils/inputConverter.js';

// https://adventofcode.com/2021/day/5
describe('Day 5: Hydrothermal Venture', () => {
  describe('Part 1', () => {
    it('should return Zero matrix', () => {
      expect(createZeroMatrix(3, 4)).to.deep.equal(['000', '000', '000', '000']);
    });

    it('should return Zero matrix from symmetric input', () => {
      const input = [
        [
          [0, 9],
          [5, 9],
        ],
        [
          [9, 4],
          [3, 4],
        ],
        [
          [2, 2],
          [2, 1],
        ],
        [
          [7, 0],
          [7, 4],
        ],
        [
          [0, 9],
          [2, 9],
        ],
        [
          [3, 4],
          [1, 4],
        ],
      ];
      expect(getDiagramSize(input)).to.deep.equal({ x: 10, y: 10 });
    });

    it('should return Zero matrix from asymmetric input', () => {
      const input = [
        [
          [0, 7],
          [5, 7],
        ],
        [
          [9, 4],
          [3, 4],
        ],
        [
          [2, 2],
          [2, 1],
        ],
      ];
      expect(getDiagramSize(input)).to.deep.equal({ x: 10, y: 8 });
    });

    it('should return line given end coordinates with common x', () => {
      const input = [
        [2, 0],
        [2, 5],
      ];
      expect(getStraightLineFromCoordinates(input)).to.deep.equal([
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
      ]);
    });

    it('should return line given end coordinates with common y', () => {
      const input = [
        [0, 2],
        [5, 2],
      ];
      expect(getStraightLineFromCoordinates(input)).to.deep.equal([
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
      ]);
    });

    it('should return dangerous overlaps', () => {
      const input = txtToArrayOfStrings('./src/2021/day5/test/example.txt');
      expect(getDangerousOverlapsFromStraightLines(input)).to.equal(5);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day5/input.txt');
      expect(getDangerousOverlapsFromStraightLines(input)).to.equal(6548);
    });
  });

  describe('Part 2', () => {
    it('should provide line slope from coordinates', () => {
      expect(
        getSlopeFromCoordinates([
          [9, 7],
          [7, 9],
        ]),
      ).to.equal(-1);
    });

    it('should return line given coordinates without b', () => {
      const input = [
        [1, 1],
        [3, 3],
      ];
      expect(getLineFromCoordinates(input)).to.deep.equal([
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });

    it('should return two points line given coordinates', () => {
      const input = [
        [2, 2],
        [2, 1],
      ];
      expect(getLineFromCoordinates(input)).to.deep.equal([
        [2, 1],
        [2, 2],
      ]);
    });

    it('should return line given end coordinates', () => {
      const input = [
        [9, 7],
        [7, 9],
      ];
      expect(getLineFromCoordinates(input)).to.deep.equal([
        [9, 7],
        [8, 8],
        [7, 9],
      ]);
    });

    it('should return dangerous overlaps', () => {
      const input = txtToArrayOfStrings('./src/2021/day5/test/example.txt');
      expect(getDangerousOverlaps(input)).to.equal(12);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day5/input.txt');
      expect(getDangerousOverlaps(input)).to.equal(19663);
    });
  });
});
