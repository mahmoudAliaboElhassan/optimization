import React from "react";

function ViewCounter({ increaseCount, num }) {
  return (
    <div>
      <p>{num}</p>
      <button onClick={increaseCount}>Increment</button>
    </div>
  );
}

export default ViewCounter;
