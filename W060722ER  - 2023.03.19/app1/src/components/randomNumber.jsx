import { useState } from "react";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const add = () => setCounter((counter) => counter + 1);

  // const a = useState(0)
  // const randomNumber = a[0]
  // const setRandomNumber = a[1]

  return (
    <div>
      <p>{randomNumber}</p>

      <button onClick={() => setRandomNumber(Math.random())}>
        generate new random number
      </button>

      <p>{counter}</p>
      <button onClick={add}>+</button>

      {randomNumber > 0.5 ? <div>bigger</div> : null}
    </div>
  );
};

export default RandomNumber;
