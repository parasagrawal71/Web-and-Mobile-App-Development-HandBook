import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); // this is used to call the current stream even if we are refreshing the page
  }

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading</div>;
    } else {
      return <div>{this.props.stream.title}</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
