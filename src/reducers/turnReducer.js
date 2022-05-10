const DEFAULT_STATE = {
  current: 0,
  numCharacters: 9,
};

const turnReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      state.current += 1;
      return { ...state };

    case 'PREV_TURN':
      state.current -= 1;
      return { ...state };

    default:
      return state;
  }
};

export default turnReducer;