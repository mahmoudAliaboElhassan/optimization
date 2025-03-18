import React from "react";
import Text from "./Text";

function ViewText({ text }) {
  console.log("View text component before delay");

  const delay = () => {
    for (let i = 0; i < 500_000_000; i++) {}
    console.log("View text component after delay");
  };

  delay();
  return (
    <div>
      <p>View text</p>
      <Text>{text}</Text>
    </div>
  );
}

export default React.memo(ViewText);
