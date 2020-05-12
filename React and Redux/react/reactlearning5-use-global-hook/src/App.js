import React from "react";

import useGlobal from "./globalHook";

function App() {
  const [globalState, globalActions] = useGlobal();

  return (
    <div>
      {globalState.counter}
      <button onClick={() => globalActions.addToCounter(5)}>Click Me</button>
    </div>
  );
}

export default App;
