import { useDispatch } from "react-redux";
import { addMoney, subtractMoney } from "../store/counter/counterSlice";

const CounterCommands = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addMoney(1000))}>add</button>
      <button onClick={() => dispatch(subtractMoney(1000))}>sub</button>
    </div>
  );
};

export default CounterCommands;
