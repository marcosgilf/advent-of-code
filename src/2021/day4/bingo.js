import { sumOnesInString } from '../../utils/string.js';
import { changeRowsForColumns } from '../../utils/array.js';

export const startBingoGame = input => {
  let bingo = [];
  let boards = [];

  bingo = input[0].split(',').map(item => Number(item));
  boards = [...input];
  boards.shift();

  return { bingo, boards };
};

export const addOneInPosition = (input, x, y) => {
  const copy = [...input];
  const item = copy[y].split(' ').filter(item => item !== '');
  item[x] = 1;
  copy[y] = item.toString().replace(/,/g, ' ');
  return copy;
};

export const findPosition = (input, element) => {
  const positions = [];
  input.forEach((item, y) => {
    item
      .split(' ')
      .filter(item => item !== '')
      .forEach((reference, x) => {
        if (reference.toString() === element.toString()) {
          positions.push({ x, y });
        }
      });
  });
  return positions;
};

export const findElement = (boards, x, y) => {
  const row = boards[y];
  return row.split(' ').filter(item => item !== '')[x];
};

export const markBingoBoards = (boards, number, play = []) => {
  let result = [...play];

  if (result.length === 0) {
    for (let index = 0; index < boards.length; index++) {
      result.push('0 0 0 0 0');
    }
  }

  const positions = findPosition(boards, number);
  positions.forEach(({ x, y }) => (result = addOneInPosition(result, x, y)));

  return result;
};

export const getBoardFromRow = row => {
  let counter = 5;
  let index = 0;
  while (row >= counter) {
    counter += 5;
    index += 1;
  }
  return index;
};

export const getBingoBoards = (boards, play) => {
  const bingo = [];
  play.forEach((row, index) => {
    if (sumOnesInString(row) === 5) {
      bingo.push(getBoardFromRow(index));
    }
  });

  changeRowsForColumns(play).forEach(column => {
    let counter = 0;
    while (counter + 5 <= [...column].length) {
      if (sumOnesInString(column.slice(counter, counter + 5)) === 5) {
        bingo.push(getBoardFromRow(counter));
      }
      counter += 5;
    }
  });
  return [...new Set(bingo)].sort((a, b) => b - a);
};

export const getSumOfUnmarkedFromBingoBoard = (boards, play, bingo) => {
  let sum = 0;
  bingo.forEach(winner => {
    let counter = winner * 5;
    while (counter <= winner * 5 + 4) {
      const boardRow = boards[counter].split(' ').filter(item => item !== '');
      const playRow = play[counter].split(' ').filter(item => item !== '');
      playRow.forEach((bit, index) => {
        if (bit === '0') {
          sum += Number(boardRow[index]);
        }
      });
      counter += 1;
    }
  });

  return sum;
};

export const playBingo = input => {
  let play = [];
  let result;
  const game = startBingoGame(input);
  game.bingo.some(number => {
    play = markBingoBoards(game.boards, number, play);
    const priceBoard = getBingoBoards(game.boards, play);
    if (priceBoard.length !== 0) {
      result = number * getSumOfUnmarkedFromBingoBoard(game.boards, play, priceBoard);
      return true;
    }
  });

  return result;
};

export const getLastWinnerBoard = input => {
  let result = 0;
  let play = [];
  let priceBoard = [];
  const game = startBingoGame(input);
  let filteredBoard = [...game.boards];
  game.bingo.some(number => {
    play = markBingoBoards(filteredBoard, number, play);
    priceBoard = getBingoBoards(filteredBoard, play);

    if (priceBoard.length !== 0 && filteredBoard.length === 5) {
      result = number * getSumOfUnmarkedFromBingoBoard(filteredBoard, play, priceBoard);
      return true;
    }

    if (priceBoard.length !== 0) {
      priceBoard.forEach(index => {
        const indexCorrected = index * 5;
        filteredBoard.splice(indexCorrected, 5);
        play.splice(indexCorrected, 5);
      });
    }
  });

  return result;
};
