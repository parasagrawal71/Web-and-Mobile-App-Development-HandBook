import React from "react";

import useGlobal from "./globalHook";

function App() {
  const [globalState, globalActions] = useGlobal();

  // const returnCounter = () => {
  //   const result = setTimeout(() => {
  //     return globalState.counter;
  //   }, 1000);
  //   console.log("setTimeout result", result);
  //   return result;
  // };

  // const returnCounter = async () => {
  //   let result = null;
  //   await setTimeout(() => {
  //     result = globalState.counter;
  //   }, 1000);
  //   console.log("result", result);
  //   return result;
  // };

  return (
    <div>
      {/* {returnCounter()} */}
      {globalState.counter}
      <button onClick={() => globalActions.addToCounter(5)}>Click Me</button>
    </div>
  );
}

export default App;
