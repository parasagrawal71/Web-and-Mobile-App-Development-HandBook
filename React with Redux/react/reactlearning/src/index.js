import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Import Components here
// import App from "./App";
import App1 from "./App1";
import reducers from "./reducers";

ReactDOM.render(
  // <App />,
  <Provider store={createStore(reducers)}>
    <App1 />
  </Provider>,
  document.getElementById("root")
  // document.querySelector('#root')
);
