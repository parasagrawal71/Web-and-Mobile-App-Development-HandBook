import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  return <div>{props && props.selectedSong && props.selectedSong.title}</div>;
};

const mapStateToProps = (state) => {
  //   console.log(state);

  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
