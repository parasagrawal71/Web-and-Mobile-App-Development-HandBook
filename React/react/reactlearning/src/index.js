import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

    // Variables' type that we can use or we cannot.
    const content = 'Hey There';
    // const content = 123;
    // const content = ['hi', 'hey'];
    // const content = [1, 2];
    // const content = {text: 'hey'}; // ERROR: Objects are not valid as a React child

    return (
        <div style={{border: '1px solid red'}} className="divStyle">
            {content}

            {/* <label for="myname">Name</label> */}
            {/*
                Warning: Invalid DOM property `for`
                Similar to className vs class, use 'htmlFor' over for.
            */}
            <label htmlFor="myname">Name</label>
            <input id="myname" />
            
        </div>
    ); 
    // First Curly braces indicates JS variable and Second Curly braces indicates object

    // class and className both are working.
    // If we use both together as className="divStyle" class="divStyle1", 
    // class's styling is overwriting className's styling here as it comes later.
    // But we shouldn't use 'class'. The reason is that it will be confused with 'class' keyword used for creating components.
    // Example, class App extends React.Component
}

ReactDOM.render(
    <App />,
    // document.querySelector('#root')
    document.getElementById('root')
)