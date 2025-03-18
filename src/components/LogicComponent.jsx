import React from "react";

function LogicComponent({ handleClick, age }) {
  console.log("Logic Component Rendered");
  return (
    <div>
      <span>{age}</span>

      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default React.memo(LogicComponent);
