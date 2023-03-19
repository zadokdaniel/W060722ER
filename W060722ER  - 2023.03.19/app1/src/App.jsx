import logo from "./logo.svg";
import "./App.css";
import RandomNumber from "./components/randomNumber";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      {/* <RandomNumber /> */}
      <Counter start={3} min={-5} max={8} step={2} />
      <Counter onChange={() => {}} />
    </div>
  );
}

export default App;
