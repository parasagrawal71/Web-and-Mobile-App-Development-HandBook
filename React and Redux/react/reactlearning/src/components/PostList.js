import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/posts";
import AuthorName from './AuthorName';

class PostList extends Component {
  componentDidMount() {
    // console.log(fetchAllPosts());  // Wrong!!!
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map (post => {
      return <div key={post.title} style={{margin : 10, backgroundColor: '#F2F2F2'}}>
        <h3>{post.title.slice(0,10)}</h3>
        <div><AuthorName userId={post.userId} /></div>
      </div>
    })
  }

  render() {
    // {console.log(this.props.posts)}
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
