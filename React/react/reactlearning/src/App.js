import React from "react";
import "./App.css";
// import Parent from './components/Parent';
// import Child from './components/Child';
// import DefaultProps from "./components/DefaultProps";
// import ChildToParent from "./components/ChildToParent";
// import SingleImage from './components/SingleImage';

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

// class App extends React.Component {
//   onInputChange(event) {
//     // console.log("onInputChange called");

//     // console.log(event);
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div>
//         {/* This passes the reference of the function, so whenever event occurs function will be called. */}
//         {/* In this case, *****event is passed automatically***** as one parameter */}
//         <input onChange={this.onInputChange} />

//         {/* Don't use parenthesis, it will be called immediately */}
//         {/* event = undefined */}
//         {/* <input onChange={this.onInputChange()} /> */}

//         {/* This also works */}
//         {/* In this case, event must be passed */}
//         {/* <input onChange={event => this.onInputChange(event)} /> */}

//         {/* This is wrong */}
//         {/* onInputChange Function is never being called */}
//         {/* <input onChange={() => this.onInputChange} /> */}

//         {/* onClick event is associated with every element such as div, input, etc.
//         Unlike onClick, onChange and onSubmit events are not associated with every elements. For Example, div. */}

//         {/* Event handler function's name convention:- on + element_name + event_name OR handle + element_name + event_name
//         Example, onInputChange or handleInputChange */}
//       </div>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//   // // UNCONTROLLED
//   // // Q) What is the value of input?
//   // // A) Get input's value from 'input' in the DOM

//   // onInputChange(event) {
//   //   console.log(event.target.value);
//   // }

//   // render() {
//   //   return (
//   //     <div>
//   //       <input onChange={this.onInputChange} />
//   //     </div>
//   //   );
//   // }

//   // --------------------------------------
//   // CONTROLLED
//   // Q) What is the value of input?
//   // A) Look at the state to get current value of the input
//   state = { term: "" };

//   render() {
//     return (
//       <div>
//         {/* form refreshes the page after we press enter button. Without form, just the input doesn't refresh */}
//         <form
//           onSubmit={e => {
//             e.preventDefault(); // Prevents the page from refreshing
//           }}
//         >
//           <input
//             // This 'value' prop makes it controlled
//             value={this.state.term}
//             onChange={e => {
//               this.setState({ term: e.target.value });
//             }}
//           />
//         </form>
//         {this.state.term}
//       </div>
//     );
//   }

//   // // --------------------------------------
//   // // this.setState Throws Error
//   // state = { term: "" };

//   // // onInputChange(event) { // onInputChange = function(event) {
//   // //   console.log(event.target.value);
//   // //   this.setState({ term: event.target.value }); // ERROR
//   // //   // console.log(this.state.term); // ERROR
//   // // };

//   // /* Method 2: Following arrow function solves the Error: cannot read setState of undefined
//   // Arrow function makes sure 'this' refers to the instance of App  */
//   // onInputChange = event => {
//   //   console.log(event.target.value);
//   //   this.setState({ term: event.target.value }); // ERROR
//   //   // console.log(this.state.term); // ERROR
//   // };

//   // // Method 3:  bind 'this' to the method 'onInputChange' of the class App.

//   // render() {
//   //   return (
//   //     <div>
//   //       <input onChange={this.onInputChange} />

//   //       {/* Method 1: Following line solves the Error: cannot read setState of undefined */}
//   //       {/* <input onChange={e => this.onInputChange(e)} /> */}

//   //       {this.state.term}
//   //     </div>
//   //   );
//   // }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//   state = {termInParent: ""}

//   propsCallback = (arg) => {
//     console.log(arg);
//     this.setState({termInParent: arg})
//   };

//   render() {
//     return (
//       <div>
//         <ChildToParent passDataToParent={this.propsCallback}/>
//         termInParent: {this.state.termInParent}
//       </div>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {
//     state = {termInParent: ""}

//     propsCallback = (arg) => {
//       console.log(arg);
//       this.setState({termInParent: arg})
//     };

//     render() {
//       return (
//         <div>
//           <ChildToParent passDataToParent={this.propsCallback}/>
//           termInParent: {this.state.termInParent}
//         </div>
//       );
//     }
//   }

// ------------------------------------------------------------------------------------------------------------------------------------

// class App extends React.Component {

//     componentDidMount() {
//         // console.log(document.querySelector('img'));
//         // We use document.querySelector in vanilla JS.
//         // Instead of document.querySelector, we prefer refs in react.
//         // refs:- give access to a single DOM element.
//     }

//     render() {
//       return ( // "display: grid" Styling
//         <div className="image-list">
//             <SingleImage src={require('./assets/img/1.jpg')} alt="1" />
//             <SingleImage src={require('./assets/img/2.jpeg')} alt="2" />
//             <SingleImage src={require('./assets/img/3.jfif')} alt="3" />
//             <SingleImage src={require('./assets/img/4.jfif')} alt="4" />
//         </div>
//       );
//     }
//   }

// ------------------------------------------------------------------------------------------------------------------------------------

class App extends React.Component {
  render() {
    return <div>Next topic is Redux</div>;
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------

export default App;
