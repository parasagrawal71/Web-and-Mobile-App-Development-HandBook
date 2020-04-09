import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} style={{ padding: 20 }}>
          <span>{song.title}</span>
          <button
            onClick={() => {
              this.props.selectSong(song);
            }}
          >
            Select
          </button>
        </div>
      );
    });
  }

  render() {
    console.log(this.props); // OUTPUT:- {songs: Array(4), dispatch: ƒ}
    // OUTPUT:- After passing an action creator selectSong as 2nd argument to connect,
    // {songs: Array(4), selectSong: ƒ}
    // Now instead of doing action = selectSong(song) and store.dispatch(action);
    // The action returned by action creator is going to automatically sent to the redux's dispatch function when we call selectSong action creator.

    // Infinite Loop but it does update the selectedSong in redux store:-
    // this.props.dispatch(selectSong({ title: "A", duration: "4:05" }));
    // this.props.dispatch(selectSong({ title: "E", duration: "4:05" }));
    return <div>{this.renderList()}</div>;
  }
}

// mapStateToProps: changing state to props
const mapStateToProps = (state) => {
  // state is every data inside our redux store
  console.log(state); // OUTPUT:- {songs: Array(4), selectedSong: null}

  //   return state;
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList); // connect() returns a function
// selectSong is action creator
// Using ES2015 Syntax, we can write { selectSong: selectSong } as { selectSong }
