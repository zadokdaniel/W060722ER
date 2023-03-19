import { useState } from "react";

const Counter = ({
  start = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
}) => {
  const [counter, setCounter] = useState(start);

  const add = () => {
    if (counter + step <= max) {
      setCounter((counter) => counter + step);
    }
  };

  const sub = () => {
    if (counter - step >= min) {
      setCounter((counter) => counter - step);
    }
  };

  return (
    <div className="counter border w-25 rounded p-2 d-flex justify-content-between align-items-center">
      <button
        className="btn btn-danger"
        disabled={counter - step < min}
        onClick={sub}
      >
        -
      </button>
      <span>{counter}</span>
      <button className="btn btn-success" onClick={add}>
        +
      </button>
    </div>
  );
};

export default Counter;
