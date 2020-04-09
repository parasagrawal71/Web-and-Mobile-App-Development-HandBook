import { combineReducers } from "redux";

// Reducers
const songsReducer = () => {
  return [
    { title: "A", duration: "4:05" },
    { title: "B", duration: "2:05" },
    { title: "C", duration: "2:35" },
    { title: "D", duration: "3:45" },
  ];
};

const selectedSongReducer = (selected_song = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selected_song;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

// Here Redux works done!
// Now we are just going to work with React and React-Redux
