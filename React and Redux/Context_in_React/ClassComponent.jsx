import React, { Component } from 'react';
import AppContext from './AppContext';

export default class ClassComponent extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
    }

    updateGreeting() {
        this.context.set('greeting', this.context.greeting === 'Hi' ? 'Hey' : 'Hi');
        this.context.set('component', 'ClassComponent');
    }

    render() {
        return (
            <>
                <section style={{ display: 'flex' }}>
                    <div>ClassComponent: </div>
                    <button onClick={this.updateGreeting.bind(this)}> Toggle Value </button>
                </section>
            </>
        );
    }
}
