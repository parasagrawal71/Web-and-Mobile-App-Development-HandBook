import React from "react";

class ChildToParent extends React.Component {
    state = { term: "" };

    render() {
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.passDataToParent(this.state.term); //e.target.value is undefined here
            }}
          >
            <input
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
                // this.props.passDataToParent(this.state.term) // State variable is getting updated little bit late
                // this.props.passDataToParent(e.target.value) // This works fine
              }}
            />
          </form>
          term: {this.state.term}
        </div>
      );
    }
};

export default ChildToParent;
