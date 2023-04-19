import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Test1 from "./components/test1";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      {isVisible ? <Test1 /> : null}

      <button
        className="position-fixed top-0 left-0"
        onClick={() => setIsVisible((isVisible) => !isVisible)}
      >
        {isVisible ? "hide" : "show"}
      </button>
    </div>
  );
}

export default App;
