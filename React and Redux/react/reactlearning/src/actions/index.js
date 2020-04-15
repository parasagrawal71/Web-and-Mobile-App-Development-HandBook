// Action creator
export const selectSong = (song) => {
  // This is named export
  // returns an action
  return {
    type: "SONG_SELECTED", // required
    payload: song, // optional
  };
};

// Named export v/s default export //
// If we need to export multiple functions, we would use named export. Otherwise, default export.
// Example,
// named export example is above
// default export example = export default someName;
