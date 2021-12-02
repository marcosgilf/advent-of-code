export const multiplyFinalHorizontalPositionAndDepth = cource => {
  let x = 0,
    y = 0;

  cource.forEach(step => {
    const [order, unitsString] = step.split(' ');
    const units = Number(unitsString);
    switch (order) {
      case 'forward':
        x += units;
        break;
      case 'down':
        y += units;
        break;
      case 'up':
        y -= units;
        break;

      default:
        break;
    }
  });

  return x * y;
};

export const multiplyFinalHorizontalPositionAndDepthWithAim = cource => {
  let x = 0,
    y = 0,
    aim = 0;

  cource.forEach(step => {
    const [order, unitsString] = step.split(' ');
    const units = Number(unitsString);
    switch (order) {
      case 'forward':
        x += units;
        y += aim * units;
        break;
      case 'down':
        aim += units;
        break;
      case 'up':
        aim -= units;
        break;

      default:
        break;
    }
  });

  return x * y;
};
