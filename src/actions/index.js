export const addAccount = (name, balance, type) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, balance, type
    }
  };
};

export const removeAccount = (id) => {
  return {
    type: 'REMOVE_ACCOUNT',
    payload: {
      id
    },
  };
};

export const nextTurn = () => {
  return { type: 'NEXT_TURN' };
};

export const prevTurn = () => {
  return { type: 'PREV_TURN' };
};