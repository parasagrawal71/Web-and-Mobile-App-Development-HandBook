import React from 'react';
import { connect } from "react-redux";
// import { fetchUser } from "../actions/posts";

class AuthorName extends React.Component {

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        // if(!user) {
        //     return <></>;
        // }
        // return (
        //     <div>{user.name}</div>
        // );

        const { user } = this.props;
        if(!user) {
            return <></>;
        }
        return (
            <div>{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is the 2nd argument which is the reference to the props(this.props) that we are going to pass to the above component.
    return {user : state.users.find((user) => user.id === ownProps.userId)}
}

// export default connect(mapStateToProps, { fetchUser })(AuthorName);
export default connect(mapStateToProps)(AuthorName);