import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// Import Components here
// import App from "./App";
import App1 from "./App1";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById("root")
  // document.querySelector('#root')
);
