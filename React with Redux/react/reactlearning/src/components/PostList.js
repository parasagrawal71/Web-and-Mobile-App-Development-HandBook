import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../actions/posts";

class PostList extends Component {
  componentDidMount() {
    // console.log(fetchAllPosts());  // Wrong!!!
    this.props.fetchAllPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

// const mapStateToProps = (state) => {
//   return { posts: state.posts };
// };

export default connect(null, { fetchAllPosts })(PostList);
