import { useState } from "react";
import "./App.css";
import ViewCounter from "./components/viewCounter";
import ViewText from "./components/ViewText";

function App() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount((prev) => prev + 1);
  };
  console.log("App rendered");

  return (
    <div>
      <ViewCounter num={count} increaseCount={countHandler} />
      <ViewText text="Hello" />
    </div>
  );
}

export default App;
