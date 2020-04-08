import React from "react";
import "./App.css";

// If directory is imported, by default it return index.js file
import Example from "./components";

// If there is no index.js file inside the directory, it will throw ERROR (Module not found: Can't resolve './assets')
// import Example from "./assets"; // ERROR

//Component name starting with small letter doesn't work
// Warning: The tag <example> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
// import example from "./components"; // Doesn't work

// import AnyName from "./components/AnyName"; // Doesn't work
// import AnyName from "./components/AnyName.js"; // Doesn't work

// ------------------------------------------------------------------------------------------------------------------------------------

const App1 = () => {
  // return <div>Redux integrated in React Application</div>;
  return <Example />;
  // return <example />;
  // return <AnyName />;
};

// ------------------------------------------------------------------------------------------------------------------------------------

export default App1;
