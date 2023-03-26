import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-10 mx-auto">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
