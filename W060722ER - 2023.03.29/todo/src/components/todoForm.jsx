import { useState } from "react";
import { useInput } from "../hooks/useInput";

const TodoForm = ({ onSubmit }) => {
  const { error, handleInputChange, handleSubmit, input } = useInput({
    onSubmit,
    validation: (input) =>
      input.length < 2 ? "must be at least 2 characters" : null,
  });

  // const [input, setInput] = useState("");
  // const [error, setError] = useState(null);

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  //   setError(null);
  // };

  // const handleSubmit = () => {
  //   if (input.length < 2) {
  //     setError("Input is required for at least two characters");
  //     return;
  //   }

  //   onSubmit(input);
  //   setInput("");
  // };

  return (
    <div className="todo-form">
      <div className="input-group mb-3">
        <span className="input-group-text">I need to:</span>
        <input
          value={input}
          onInput={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          className="form-control"
          placeholder="Buy milk"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
        {error ? <div className="text-danger">{error}</div> : null}
      </div>
    </div>
  );
};

export default TodoForm;
