import { useEffect, useRef, useState } from "react";





const CIRCLE_SIZE = 50;

const Test1 = () => {
  //   const [lastPosition, setLastPosition] = useState(null);
  const myDiv = useRef();
  const circleDiv = useRef();

  useEffect(() => {
    const handler = (e) => {
      circleDiv.current.style.top = e.clientY - CIRCLE_SIZE / 2 + "px";
      circleDiv.current.style.left = e.clientX - CIRCLE_SIZE / 2 + "px";
      //   setLastPosition({ x: e.clientX, y: e.clientY });
    };

    const element = myDiv.current;

    element.addEventListener("mousemove", handler);

    return () => {
      element.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <div
      ref={myDiv}
      className="top-0 left-0 min-vh-100 min-vw-100 bg-primary position-relative"
    >
      {/* {lastPosition ? ( */}
      <div
        ref={circleDiv}
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: "50%",
          // top: lastPosition.y - CIRCLE_SIZE / 2,
          // left: lastPosition.x - CIRCLE_SIZE / 2,
        }}
        className="bg-danger position-absolute"
      ></div>
      {/* ) : null} */}
    </div>
  );
};

export default Test1;
