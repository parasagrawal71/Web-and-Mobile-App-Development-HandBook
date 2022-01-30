import React from 'react';

const DedicatedContext = React.createContext();

export class DedicatedContextStore extends React.Component {
    state = {};

    set = (varName, value) => {
        this.setState({ [varName]: value });
    };

    render() {
        return (
            <DedicatedContext.Provider value={{ ...this.state, set: this.set }}>
                {this.props.children}
            </DedicatedContext.Provider>
        );
    }
}

export default DedicatedContext;
