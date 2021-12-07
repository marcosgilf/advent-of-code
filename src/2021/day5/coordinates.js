import { replaceAt } from '../../utils/string.js';

export const createZeroMatrix = (x, y) => {
  let row = '';
  const matrix = [];
  for (let index = 0; index < x; index++) {
    row = row.concat(0);
  }

  for (let index = 0; index < y; index++) {
    matrix.push(row);
  }

  return matrix;
};

export const getDiagramSize = input => {
  let x = 0,
    y = 0;

  input.forEach(duo =>
    duo.forEach(item => {
      if (item[0] > x) {
        x = item[0];
      }
      if (item[1] > y) {
        y = item[1];
      }
    }),
  );

  return { x: x + 1, y: y + 1 };
};

export const getSlopeFromCoordinates = input => {
  const [point1, point2] = input;
  return (point2[1] - point1[1]) / (point2[0] - point1[0]);
};

export const getStraightLineFromCoordinates = input => {
  const line = [];
  const point1 = input[0];
  const point2 = input[1];
  const common = point1[0] === point2[0] ? 0 : 1;
  const pivot = common === 0 ? 1 : 0;
  let start, end;

  if (point1[pivot] <= point2[pivot]) {
    start = point1[pivot];
    end = point2[pivot];
  } else {
    start = point2[pivot];
    end = point1[pivot];
  }
  for (let index = start; index <= end; index++) {
    if (common === 0) {
      line.push([point1[0], index]);
    } else {
      line.push([index, point1[1]]);
    }
  }

  return line;
};

export const getLineFromCoordinates = input => {
  const line = [];
  const point1 = input[0];
  const point2 = input[1];
  // y = mx + b
  const m = getSlopeFromCoordinates(input);
  const b = point1[1] - point1[0] * m;
  const y = x => m * x + b;

  if (Math.abs(m) === Infinity) {
    return getStraightLineFromCoordinates(input);
  } else if (point2[0] >= point1[0]) {
    for (let index = point1[0]; index <= point2[0]; index++) {
      line.push([index, y(index)]);
    }
  } else {
    for (let index = point1[0]; index >= point2[0]; index--) {
      line.push([index, y(index)]);
    }
  }

  return line;
};

export const getDangerousOverlapsFromStraightLines = input => {
  let overlaps = 0;
  const coordinates = input
    .map(row => row.split(' -> '))
    .map(row => row.map(item => item.split(',').map(digit => Number(digit))))
    .filter(duo => duo[0][0] === duo[1][0] || duo[0][1] === duo[1][1]);
  const size = getDiagramSize(coordinates);
  const diagram = createZeroMatrix(size.x, size.y);

  coordinates.forEach(duo => {
    const line = getStraightLineFromCoordinates(duo);
    line.forEach(item => {
      const [x, y] = item;
      const counter = Number(diagram[y][x]) + 1;
      diagram[y] = replaceAt(diagram[y], x, `${counter}`);
    });
  });

  diagram.forEach(item => {
    const row = [...item];
    row.forEach(point => {
      if (Number(point) > 1) {
        overlaps += 1;
      }
    });
  });

  return overlaps;
};

export const getDangerousOverlaps = input => {
  let overlaps = 0;
  const coordinates = input
    .map(row => row.split(' -> '))
    .map(row => row.map(item => item.split(',').map(digit => Number(digit))))
    .filter(
      duo =>
        duo[0][0] === duo[1][0] ||
        duo[0][1] === duo[1][1] ||
        Math.abs(getSlopeFromCoordinates(duo)) === 1,
    );
  const size = getDiagramSize(coordinates);
  const diagram = createZeroMatrix(size.x, size.y);

  coordinates.forEach(duo => {
    const line = getLineFromCoordinates(duo);
    line.forEach(item => {
      const [x, y] = item;
      const counter = Number(diagram[y][x]) + 1;
      diagram[y] = replaceAt(diagram[y], x, `${counter}`);
    });
  });

  diagram.forEach(item => {
    const row = [...item];
    row.forEach(point => {
      if (Number(point) > 1) {
        overlaps += 1;
      }
    });
  });

  return overlaps;
};
