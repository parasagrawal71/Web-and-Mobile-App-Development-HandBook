import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); // this is used to call the current stream even if we are refreshing the page
  }

  onSubmit = (formValues) => {
    // console.log(formValues); // It contains id and userId also. For 'PUT', it shouldn't contain key that's not changed.

    this.props.editStream(this.props.match.params.id, formValues);
    // We are using 'PUT' method for editing here.
    // PUT replaces the existing object with the new object received from client with only keys it has.
    // Definition [ 'PUT' updates all properties of a record ]

    // Use 'PATCH'
    // Definition [ 'PATCH' updates some properties of a record ]
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            // initialValues={this.props.stream} // It's giving all the keys, even that which is not changed
            // initialValues={{
            //   title: this.props.stream.title,
            //   description: this.props.stream.description,
            // }}
            initialValues={_.pick(this.props.stream, "title", "description")}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
