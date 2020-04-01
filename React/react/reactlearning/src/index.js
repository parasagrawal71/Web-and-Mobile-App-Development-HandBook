import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Parent from './components/Parent';
// import Child from './components/Child';
// import DefaultProps from "./components/DefaultProps";

// ------------------------------------------------------------------------------------------------------------------------------------

// const App = () => {

//     // Variables' type that we can use or we cannot.
//     const content = 'Hey There';
//     // const content = 123;
//     // const content = ['hi', 'hey'];
//     // const content = [1, 2];
//     // const content = {text: 'hey'}; // ERROR: Objects are not valid as a React child

//     return (
//         <div style={{border: '1px solid red'}} className="divStyle">
//             {content}

//             {/* <label for="myname">Name</label> */}
//             {/*
//                 Warning: Invalid DOM property `for`
//                 Similar to className vs class, use 'htmlFor' over for.
//             */}
//             <label htmlFor="myname">Name</label>
//             <input id="myname" />

//         </div>
//     );
//     // First Curly braces indicates JS variable and Second Curly braces indicates object

//     // class and className both are working.
//     // If we use both together as className="divStyle" class="divStyle1",
//     // class's styling is overwriting className's styling here as it comes later.
//     // But we shouldn't use 'class'. The reason is that it will be confused with 'class' keyword used for creating components.
//     // Example, class App extends React.Component
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// const App = () => {
//     // This Child component is passed as children property of props.
//     // if single, children property is object.
//     // if multiple, children property is Array.
//     return (
//         <Parent>
//             <Child />
//             <Child />
//         </Parent>
//     );
// };

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//   // constructor method is called whenever new instance of App is created
//   // and It is called at the very beginning.
//   // Constructor method is not specific to React, it is feature of JS.
//   // It is called with the 'props' variable which is same as props in functional component.
//   constructor(props) {
//     // This constructor is overriding the constructor of React.component
//     // To run all the required functionality of parent's constructor, call super function.
//     super(props);

//     // variable name must be state instead of anything else like myState, etc.
//     this.state = {
//       lat: 0,
//       demo: 450
//     };

//     window.navigator.geolocation.getCurrentPosition(
//       // callback function when geolocation getCurrentPosition API succeed
//       position => {
//         console.log(position);
//         this.setState({ lat: position.coords.latitude });
//         // Don't use like this
//         // this.state.lat = position.coords.latitude
//       },
//       // callback function when geolocation getCurrentPosition API fails
//       err => console.log(err)
//     );
//   }

//   // render method is compulsory in React
//   render() {
//     // Render method will be called frequently whenever state changes so don't write such api calls inside render method.
//     // window.navigator.geolocation.getCurrentPosition(
//     //   position => console.log(position),
//     //   err => console.log(err)
//     // );

//     return (
//       <div>
//         Latitude: {this.state.lat} <br /> Demo: {this.state.demo}
//       </div>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   console.log("constructor called");
//   //   this.state = { lat: 0 };
//   // }

//   // Alternate State Initialization
//   // Babel converts following line into constructor
//   state = { lat: 0 };

//   getLatitude() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => {
//         console.log(position);
//         this.setState({ lat: position.coords.latitude });
//       },
//       err => console.log(err)
//     );
//   }

//   componentDidMount() {
//     this.getLatitude();
//     console.log("componentDidMount called");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         {console.log("render called")}
//         Latitude: {this.state.lat}
//       </div>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//   render() {
//     return <DefaultProps />;
//     // return <DefaultProps message="Hey value passed" />;
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

class App extends React.Component {
  onInputChange(event) {
    console.log("onInputChange called");

    // console.log(event);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        {/* This passes the reference of the function, so whenever event occurs function will be called. */}
        {/* In this case, *****event is passed automatically***** as one parameter */}
        <input onChange={this.onInputChange} />

        {/* Don't use parenthesis, it will be called immediately */}
        {/* event = undefined */}
        {/* <input onChange={this.onInputChange()} /> */}

        {/* This also works */}
        {/* In this case, event must be passed */}
        {/* <input onChange={event => this.onInputChange(event)} /> */}

        {/* This is wrong */}
        {/* onInputChange Function is never being called */}
        {/* <input onChange={() => this.onInputChange} /> */}

        {/* onClick event is associated with every element such as div, input, etc.
        Unlike onClick, onChange and onSubmit events are not associated with every elements. For Example, div. */}

        {/* Event handler function's name convention:- on + element_name + event_name OR handle + element_name + event_name
        Example, onInputChange or handleInputChange */}
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------

ReactDOM.render(
  <App />,
  // document.querySelector('#root')
  document.getElementById("root")
);
