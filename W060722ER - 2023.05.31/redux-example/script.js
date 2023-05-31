/** money.actionTypes.js */
const ADD_MONEY = "ADD_MONEY";
const SUB_MONEY = "SUB_MONEY";
const FREEZE = "FREEZE";
const UNFREEZE = "UNFREEZE";

/** money.actions.js */
function addMoney(amount = 0) {
  return {
    type: ADD_MONEY,
    payload: amount,
  };
}
function subtractMoney(amount = 0) {
  return {
    type: SUB_MONEY,
    payload: amount,
  };
}
function freezeMoney() {
  return {
    type: FREEZE,
  };
}

function unfreezeMoney() {
  return {
    type: UNFREEZE,
  };
}

/** money.reducer.js */
const initialState = {
  amount: 0,
  isFrozen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, amount: state.amount + action.payload };

    case SUB_MONEY:
      if (state.isFrozen) {
        return state;
      }

      return { ...state, amount: state.amount - action.payload };

    case FREEZE:
      return { ...state, isFrozen: true };

    case UNFREEZE:
      return { ...state, isFrozen: false };

    default:
      return state;
  }
};

/** store.js */
const store = Redux.createStore(reducer);

//** use the store */
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addMoney(1000));
store.dispatch({ type: "ADD_MONEY", payload: 500 });
unsubscribe();
store.dispatch({ type: "ADD_MONEY", payload: 20 });
store.dispatch({ type: "ADD_MONEY", payload: 10000 });
