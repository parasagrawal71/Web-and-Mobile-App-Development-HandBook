import React from 'react';
import AppContext from './AppContext';
import DedicatedContext from './contexts/DedicatedContext';

const FunctionalComponent = () => {
    const appContext = React.useContext(AppContext);
    const dedicatedContext = React.useContext(DedicatedContext);

    const updateGreeting = () => {
        appContext.set('greeting', appContext?.greeting === 'Hi' ? 'Hey' : 'Hi');
        appContext.set('component', 'FunctionalComponent');
    };

    const someOperation = () => {
        console.log('someOperation: doing something... ');
        return 'doing something... ';
    };

    const doSomethingNew = () => {
        console.log('doSomethingNew: doing something new... ');
        return 'doing something new... ';
    };

    return (
        <section style={{ display: 'flex' }}>
            <div>FunctionalComponent: </div>
            <button
                onClick={() => {
                    // appContext.set('someOperation', someOperation);
                    dedicatedContext.set('doSomethingNew', doSomethingNew);
                }}
            >
                Toggle Value
            </button>
        </section>
    );
};

export default FunctionalComponent;
