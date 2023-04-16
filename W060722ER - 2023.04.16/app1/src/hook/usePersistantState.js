import { useCallback, useState } from "react";

const runIfFunction = (value, ...rest) => {
  return typeof value === "function" ? value(...rest) : value;
};

export const useStatePersist = (localStorageKey, initialValue) => {
  const [state, setState] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));

    if (typeof initialValue !== "function") {
      return savedData ? savedData : initialValue;
    }

    return runIfFunction(initialValue, savedData);
  });

  const setStateAndSave = useCallback((updatedState) => {
    setState((state) => {
      const updatedStateResult = runIfFunction(updatedState, state);

      localStorage.setItem(localStorageKey, JSON.stringify(updatedStateResult));
      return updatedStateResult;
    });
  }, []);

  return [state, setStateAndSave];
};
