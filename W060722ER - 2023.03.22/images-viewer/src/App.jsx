import "./App.css";
import Slider from "./components/Slider";
import { images } from "./images";
import { useState } from "react";

function App() {
  const [isInfiniteEnabled, setIsInfiniteEnabled] = useState(true);

  return (
    <div className="App">
      <div className="container  mt-5">
        <div className="row">
          <div className="col-8 mx-auto">
            <Slider images={images} infiniteScroll={isInfiniteEnabled} />

            <input
              type="checkbox"
              onChange={(e) => setIsInfiniteEnabled(e.target.checked)}
              checked={isInfiniteEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
