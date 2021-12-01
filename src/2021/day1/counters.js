export const countWhenNumberIncreases = depths => {
  let counter = 0;
  let reference = depths[0];

  depths.forEach(depth => {
    if (depth - reference > 0) {
      counter++;
    }
    reference = depth;
  });

  return counter;
};

export const countWhenNumberIncreasesByWindow = depths => {
  let counter = 0;
  let reference1 = depths[0] + depths[1] + depths[2];
  let reference2 = depths[0] + depths[1] + depths[2];

  depths.forEach((depth, index) => {
    if (depths.length < index + 3) {
      return;
    }

    if (reference2 - reference1 > 0) {
      counter++;
    }

    reference1 = reference2;
    reference2 = depths[index + 1] + depths[index + 2] + depths[index + 3];
  });

  return counter;
};
