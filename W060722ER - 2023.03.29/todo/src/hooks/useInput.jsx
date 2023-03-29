import { useState } from "react";

export const useInput = ({
  initialValue = "",
  validation = () => {},
  onSubmit = () => {},
}) => {
  const [input, setInput] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const validationResult = validation(input);

    if (validationResult) {
      setError(validationResult);
      return;
    }

    onSubmit(input);
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(null);
  };

  return {
    handleInputChange,
    handleSubmit,
    error,
    input,
  };
};
