export const getLanternfishFromInputAfterGivenDays = (input, days) => {
  const initialState = input[0].split(',').map(fish => Number(fish));
  let state = initialState;

  for (let index = 1; index < days + 1; index++) {
    state = state.map(counter => (counter -= 1));
    state.forEach((fish, index) => {
      if (fish === -1) {
        state[index] = 6;
        state.push(8);
      }
    });
  }

  return state.length;
};

export const getLanternfishFromInputAfterGivenDaysV2 = (input, days) => {
  let lanterfish = 0;
  const initialState = input[0].split(',').map(fish => Number(fish));
  let state = {};
  for (let index = 0; index <= 8; index++) {
    state[index] = 0;
  }

  initialState.forEach(fish => {
    state[fish] = state[fish] + 1;
  });

  for (let index = 1; index < days + 1; index++) {
    const state0 = state[0];
    let i = 1;
    while (i <= 8) {
      state[i - 1] = state[i];
      i += 1;
    }
    state[8] = 0;
    if (state0 > 0) {
      state[6] = state[6] + state0;
      state[8] = state[8] + state0;
    }
  }

  Object.keys(state).forEach(index => {
    lanterfish += state[index];
  });

  return lanterfish;
};
