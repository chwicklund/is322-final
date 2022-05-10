const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
  accounts: [
    { id: generateID(), name: 'Jim', balance: 800, type: 'checking' },
    { id: generateID(), name: 'Artie', balance: 500, type: 'checking' },
    { id: generateID(), name: 'Deshaun', balance: 22000, type: 'checking' },
    { id: generateID(), name: 'Yusuf', balance: 150, type: 'checking' },
    { id: generateID(), name: 'George', balance: 190, type: 'checking' },
    { id: generateID(), name: 'Talia', balance: 6, type: 'checking' },
    { id: generateID(), name: 'Boris', balance: 100, type: 'checking' },
    { id: generateID(), name: 'Fatma', balance: 1800, type: 'checking' },
    { id: generateID(),  name: 'Maria', balance: 13000, type: 'checking' },
  ],
  checking: [],
};

const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],
    checking: state.accounts.filter(char => char.type === 'checking'),
  };

  return newState;
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      const account = action.payload;
      account.id = generateID();
      state.accounts.push(account);
      return sortAccounts(state);

    case 'REMOVE_ACCOUNT':
      const { id } = action.payload;
      state.accounts = state.accounts.filter(char => {
        return char.id !== id;
      });
      return sortAccounts(state);

    default:
      return state;
  }
};

export default accountReducer;