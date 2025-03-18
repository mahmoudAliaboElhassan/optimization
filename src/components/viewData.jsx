import React from "react";
import Text from "./Text";

function ViewData({ name }) {
  console.log("View text component before delay from view data component");

  const delay = () => {
    for (let i = 0; i < 500_000_000; i++) {}
    console.log("View text component after delay view data component");
  };

  delay();
  return (
    <div>
      <p>View data</p>
      <Text>{name}</Text>
    </div>
  );
}

export default React.memo(ViewData);
