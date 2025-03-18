import { useCallback, useMemo, useState } from "react";
import "./App.css";
import ViewCounter from "./components/viewCounter";
import ViewText from "./components/ViewText";
import ViewData from "./components/viewData";
import LogicComponent from "./components/LogicComponent";

function App() {
  const [count, setCount] = useState(0);
  const name = "Mahmoud";
  // const data = { name: "mahmoud" };
  const [details, setDetials] = useState({ name: "Mahmoud" });

  const data = useMemo(() => {
    return details;
  }, [details]);

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  // const handleClick = () => {
  //   console.log("rendered logic by click");
  // }

  // const handleClick = useCallback(() => {
  //   setDetials((prev) => {
  //     return { ...prev, age: 21 };
  //     // it consider it as age:21,age:21 so it changes so re-evalue happens
  //     and as dependency array changes
  //     callback itself changes and component re-evaluated
  //   });
  // }, [details]);
  // to solve it

  const handleClick = useCallback(() => {
    if (!details.age) {
      setDetials((prev) => {
        return { ...prev, age: 21 };
        //it only make age changes in case of no age
        // in case of no age it change details and as
        // dependency array changes
        // it change callback and component is re-evaluated
      });
      return details;
    }
  }, [details]);

  console.log("App rendered");

  return (
    <div>
      <ViewCounter num={count} increaseCount={countHandler} />
      <ViewText text={name} />
      <ViewData name={data.name} />
      <LogicComponent handleClick={handleClick} age={details?.age} />
    </div>
  );
}

export default App;
