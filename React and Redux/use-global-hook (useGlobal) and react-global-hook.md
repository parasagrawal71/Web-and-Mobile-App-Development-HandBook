https://www.npmjs.com/package/use-global-hook   

Code written and tested in react/reactlearning5-use-global-hook   

globalHook/index.js

```react
import React from "react";
import globalHook from "use-global-hook";

// *** IMPORT actions *** //
import actions from "./actions";

const initialState = {
  counter: 0,
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
```



globalHook/actions.js

```react
const actions = {
  addToCounter: (store, value) => {
    store.setState({ counter: store.state.counter + value });
  },
};

export default actions;
```



Component where we are using

```javascript
import React from "react";

import useGlobal from "./globalHook";

function App() {
  const [globalState, globalActions] = useGlobal();

  return (
    < div>
      {globalState.counter}
      < button onClick={() => globalActions.addToCounter(5)}>Click Me< /button>
    < /div>
  );
}

export default App;
```





# react-global-hook   
https://medium.com/@hosseinm.developer/manage-state-with-react-hooks-how-to-use-react-global-hook-785331e5f1f

