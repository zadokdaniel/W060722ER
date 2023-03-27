import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
