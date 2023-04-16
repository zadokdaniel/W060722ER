import { useState } from "react";
import ChildComponent from "./child";

const ParentComponent = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      Parent
      <br />

      <button onClick={() => setIsHidden((isHidden) => !isHidden)}>
        {isHidden ? "show" : "hide"} child component
      </button>
      
      <hr />
      {isHidden ? null : <ChildComponent />}
    </div>
  );
};

export default ParentComponent;
