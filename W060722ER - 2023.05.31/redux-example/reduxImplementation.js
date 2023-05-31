function createStore(reducer) {
  let currentState;
  let fns = [];

  dispatch({ action: "@@redux/INIT" });

  function dispatch(action) {
    currentState = reducer(currentState, action);

    for (const fn of fns) {
      fn();
    }
  }

  function subscribe(fn) {
    fns.push(fn);

    return () => {
      fns = fns.filter((fnFromArray) => fnFromArray !== fn);
    };
  }

  function getState() {
    return currentState;
  }

  return {
    dispatch,
    subscribe,
    getState,
  };
}

const initialState = { amount: 0 };
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "ADD":
      return { ...state, amount: state.amount + 1 };

    default:
      return state;
  }
};
const store = createStore(reducer);
const unsubscribe1 = store.subscribe(() => console.log("dispatch ran1"));
const unsubscribe2 = store.subscribe(() => console.log("dispatch ran2"));
const unsubscribe3 = store.subscribe(() => console.log("dispatch ran3"));

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });

unsubscribe1();
unsubscribe2();
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
