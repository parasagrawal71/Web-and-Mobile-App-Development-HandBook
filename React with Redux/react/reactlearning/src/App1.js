import React from "react";
import "./App.css";
import { selectSong } from "./actions"; // This is named import

// ------------------------------------------------------------------------------------------------------------------------------------

const App1 = () => {
  // return <div>Redux integrated in React Application</div>;
  return <div>{console.log(selectSong("mySong"))}</div>;
};

// ------------------------------------------------------------------------------------------------------------------------------------

export default App1;
