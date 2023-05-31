import { useSelector } from "react-redux";

const Counter = () => {
  const { amount, freeze } = useSelector((state) => state.counter);

  return (
    <div>
      <div>amount: {amount}</div>
      <div>freeze: {String(freeze)}</div>
    </div>
  );
};

export default Counter;
