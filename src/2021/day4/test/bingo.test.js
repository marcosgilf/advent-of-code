import { expect } from 'chai';
import {
  getSumOfUnmarkedFromBingoBoard,
  getBoardFromRow,
  startBingoGame,
  addOneInPosition,
  markBingoBoards,
  findPosition,
  findElement,
  getBingoBoards,
  playBingo,
  getLastWinnerBoard,
} from '../bingo.js';
import { txtToArrayOfStrings } from '../../../utils/inputConverter.js';

// https://adventofcode.com/2021/day/4
describe('Day 4: Giant Squid', () => {
  describe('Part 1', () => {
    it('should return bingo numbers and boards', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      expect(startBingoGame(input)).to.deep.equal({
        bingo: [
          7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3,
          26, 1,
        ],
        boards: [
          '22 13 17 11  0',
          ' 8  2 23  4 24',
          '21  9 14 16  7',
          ' 6 10  3 18  5',
          ' 1 12 20 15 19',
          ' 3 15  0  2 22',
          ' 9 18 13 17  5',
          '19  8  7 25 23',
          '20 11 10 24  4',
          '14 21 16 12  6',
          '14 21 17 24  4',
          '10 16 15  9 19',
          '18  8 23 26 20',
          '22 11 13  6  5',
          ' 2  0 12  3  7',
        ],
      });
    });

    it('should return positions of a given element', () => {
      const input = ['22 13 17 11  0', ' 8  2 23  4 24', '21  9 14 16 17', ' 6 10  3 18  5'];
      expect(findPosition(input, 17)).to.deep.equal([
        { x: 2, y: 0 },
        { x: 4, y: 2 },
      ]);
    });

    it('should add "1" in given position', () => {
      const input = ['1 0 0 0 0', '0 1 0 0 0', '0 0 1 0 0', '0 0 0 1 0'];
      const output = ['1 0 0 0 0', '0 1 1 0 0', '0 0 1 0 0', '0 0 0 1 0'];
      expect(addOneInPosition(input, 2, 1)).to.deep.equal(output);
    });

    it('should return element in given position', () => {
      const input = ['22 13 17 11  0', ' 8  2 23  4 24', '21  9 14 16 17', ' 6 10  3 18  5'];
      expect(findElement(input, 2, 1)).to.deep.equal('23');
    });

    it('should mark bingo board', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      const game = startBingoGame(input);
      const play = [];
      expect(markBingoBoards(game.boards, game.bingo[0], play)).to.deep.equal([
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 1',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 1 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 0',
        '0 0 0 0 1',
      ]);
    });

    it('should return board number from row', () => {
      expect(getBoardFromRow(4)).to.equal(0);
      expect(getBoardFromRow(5)).to.equal(1);
      expect(getBoardFromRow(10)).to.equal(2);
    });

    it('should return bingo boards with price', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      const game = startBingoGame(input);
      const play = [
        '0 0 1 1 1',
        '0 1 1 1 1',
        '1 1 1 0 1',
        '0 0 0 0 1',
        '0 0 0 0 1',
        '0 0 1 1 0',
        '1 0 0 1 1',
        '0 0 1 0 1',
        '0 1 0 1 1',
        '1 1 0 0 0',
        '1 1 1 1 1',
        '0 0 0 1 0',
        '0 0 1 0 0',
        '0 1 0 0 1',
        '1 1 0 0 1',
      ];
      expect(getBingoBoards(game.boards, play)).to.deep.equal([2, 0]);
    });

    it('should return bingo boards with price without duplicates', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      const game = startBingoGame(input);
      const play = [
        '0 0 1 1 1',
        '0 1 1 1 1',
        '1 1 1 0 1',
        '0 0 0 0 1',
        '0 0 0 0 1',
        '0 0 1 1 0',
        '1 0 0 1 1',
        '0 0 1 0 1',
        '0 1 0 1 1',
        '1 1 0 0 0',
        '1 1 1 1 1',
        '1 0 0 1 0',
        '1 0 1 0 0',
        '1 1 0 0 1',
        '1 1 0 0 1',
      ];
      expect(getBingoBoards(game.boards, play)).to.deep.equal([2, 0]);
    });

    it('should return sum of unmarked numbers from bingo boards', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      const game = startBingoGame(input);
      const play = [
        '0 0 1 1 1',
        '0 1 1 1 0',
        '1 1 1 0 0',
        '0 0 0 0 1',
        '0 0 0 0 1',
        '0 0 1 1 0',
        '1 0 0 1 1',
        '0 0 1 0 1',
        '0 1 0 1 1',
        '1 1 0 0 0',
        '1 1 1 1 1',
        '0 0 0 1 0',
        '0 0 1 0 0',
        '0 1 0 0 1',
        '1 1 0 0 1',
      ];
      const bingo = [2];
      expect(getSumOfUnmarkedFromBingoBoard(game.boards, play, bingo)).to.equal(188);
    });

    it('should return sum of unmarked numbers from bingo input', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      expect(playBingo(input)).to.equal(4512);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/input.txt');
      expect(playBingo(input)).to.equal(8442);
    });
  });

  describe('Part 2', () => {
    it('should provide which board will win last', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/test/example.txt');
      expect(getLastWinnerBoard(input)).to.equal(1924);
    });

    it('should provide the answer', () => {
      const input = txtToArrayOfStrings('./src/2021/day4/input.txt');
      expect(getLastWinnerBoard(input)).to.equal(4590);
    });
  });
});
