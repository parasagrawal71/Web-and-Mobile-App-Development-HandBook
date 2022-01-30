import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AnotherClassComponent extends Component {
    static contextType = AppContext;

    render() {
        return (
            <>
                <AppContext.Consumer>
                    {(context) => (
                        <div>
                            Inside AnotherClassComponent, Method 1:
                            {context?.greeting ? `${context?.greeting} from ${context?.component}` : ''}
                        </div>
                    )}
                </AppContext.Consumer>

                <div>
                    Inside AnotherClassComponent, Method 2:
                    {this.context?.greeting ? `${this.context?.greeting} from ${this.context?.component}` : ''}
                </div>
            </>
        );
    }
}
