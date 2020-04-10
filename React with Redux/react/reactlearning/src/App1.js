import React from "react";
import "./App.css";
// import { selectSong } from "./actions"; // This is named import
// import SongList from "./components/SongList";
// import SongDetail from "./components/SongDetail";
import PostList from "./components/PostList";

// ------------------------------------------------------------------------------------------------------------------------------------

// const App1 = () => {
//   // return <div>Redux integrated in React Application</div>;
//   // return <div>{console.log(selectSong("mySong"))}</div>;
//   return (
//     <div>
//       <SongList />
//       <SongDetail />
//     </div>
//   );
// };

// ------------------------------------------------------------------------------------------------------------------------------------

const App1 = () => {
  // React-thunk
  return (
    <div>
      <PostList />
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------

export default App1;
