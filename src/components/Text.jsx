import React from "react";

function Text({ children }) {
  console.log("Text component");
  return <div>{children}</div>;
}

export default Text;
