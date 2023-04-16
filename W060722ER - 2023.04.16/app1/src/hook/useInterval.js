import { useEffect } from "react";

export const useInterval = (delay = 0, cb = () => {}) => {
  useEffect(() => {
    const id = setInterval(cb, delay);
    console.log("started" + id);

    return () => {
      clearInterval(id);
      console.log("cleaned " + id);
    };
  }, [delay, cb]);
};
