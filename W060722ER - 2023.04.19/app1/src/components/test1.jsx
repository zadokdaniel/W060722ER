import { useEffect, useRef, useState } from "react";

function useAddEventListener(eventName, cb, element = window) {
  console.log(element, eventName, cb);

  useEffect(() => {
    element?.addEventListener(eventName, cb);

    return () => {
      element?.removeEventListener(eventName, cb);
    };
  }, [element, eventName, cb]);
}

function useMouseLocation(element) {
  const [lastPosition, setLastPosition] = useState(null);

  useAddEventListener(
    "mousemove",
    (e) => {
      setLastPosition({ x: e.clientX, y: e.clientY });
    },
    element
  );

  return lastPosition;
}

const CIRCLE_SIZE = 50;

const Test1 = () => {
  const myDiv = useRef();
  const circleDiv = useRef();

  const lastPosition = useMouseLocation(myDiv.current);

  return (
    <div
      ref={myDiv}
      className="top-0 left-0 min-vh-100 min-vw-100 bg-primary position-relative"
    >
      {lastPosition ? (
        <div
          ref={circleDiv}
          style={{
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            borderRadius: "50%",
            top: lastPosition.y - CIRCLE_SIZE / 2,
            left: lastPosition.x - CIRCLE_SIZE / 2,
          }}
          className="bg-danger position-absolute"
        ></div>
      ) : null}
    </div>
  );
};

export default Test1;
