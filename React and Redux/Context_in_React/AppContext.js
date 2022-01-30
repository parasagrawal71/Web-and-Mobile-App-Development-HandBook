import React from 'react';

const AppContext = React.createContext();

export class AppContextStore extends React.Component {
    state = { dummyString: '' };

    set = (varName, value) => {
        this.setState({ [varName]: value });
    };

    render() {
        return (
            <AppContext.Provider value={{ ...this.state, set: this.set }}>{this.props.children}</AppContext.Provider>
        );
    }
}

export default AppContext;
