import logo from "./logo.svg";
import "./App.css";

import store from "./store/store";
import { Provider } from "react-redux";
import Counter from "./component/counter";
import CounterCommands from "./component/counterCommands";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <CounterCommands />
      </div>
    </Provider>
  );
}

export default App;
