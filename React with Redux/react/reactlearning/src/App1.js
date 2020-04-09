import React from "react";
import "./App.css";
// import { selectSong } from "./actions"; // This is named import
import SongList from "./components/SongList";

// ------------------------------------------------------------------------------------------------------------------------------------

const App1 = () => {
  // return <div>Redux integrated in React Application</div>;
  // return <div>{console.log(selectSong("mySong"))}</div>;
  return (
    <div>
      <SongList />
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------

export default App1;
