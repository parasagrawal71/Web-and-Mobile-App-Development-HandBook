* Three main dependencies of react are:-   
1. Babel   
2. Webpack   
3. Dev Server   

Q) What is Babel?   
A) Babel is a free and open-source JavaScript compiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is popular tool for using the newest features of the JavaScript programming language.   
Type: compiler   

Babel converts the JSX into JS codes(React.createElement) which then converted into HTML elements.   

Q) Why we use className keyword instead of class in JSX?, and does class keyword works?   
A) Yes, class works. But we shouldn't use 'class'. The reason is that it will be confused with 'class' keyword used for creating components. Example, class App extends React.Component   

* __Component LifeCycle__ (Time starts from 1 -> 5):-   
1. constructor	// One-time setup(Ex- State Initialization)   
2. render	// Return JSX only, Recommended.   
	content visible on screen   
3. componentDidMount	// Data-Loading here(Ex- API Calls), Recommended.   
	sit and wait for updates  
4. [render] x n   
5. componentDidUpdate x n	// More Data-Loading here whenever state/props changes.   
	sit and wait until this component is unmounted   
6. componentWillUnmount	// Cleanup   

* __Redux Cycle__:-   
<pre>
Action Creator -->  Action  -->  dispatch  -->  Reducers  -->  State   
(Function)     --> (Object) --> (Function) --> (Function) --> (Object)
</pre>
	- Action Creator is a function that is going to create or return a plain JS object.   
	- This plain JS object returned by Action Creator is an action. An action has a type property and payload property. Type property(required) describes some change that we want to make inside of our data and Payload property(optional) describes some contexts around the change that we want to make.   
	- dispatch function is going to take in an action. It's going to make copies of that object and then pass it off to a bunch of different places inside of our application.   
	- Reducer is a function that is responsible for taking in an action and some existing amount of data. It's going to process that action and then make some change to the data and then return it so that it can be centralized in some other other location.   
	- State is a central repository of all information that has been created by our reducers.   

Redux codepen link:- https://codepen.io/parasagrawal71/pen/VwLJpaZ   
(same code available in "redux in vanilla JS" folder).   

<pre>
To change state of our app, we call an.. --> [Action Creator] --> produces an.. --> [Action] --> Gets fed to.. --> [dispatch] --> Forwards the action to each reducers.. --> [Reducers] --> Creates new.. --> [State] --> Wait until we need to update state again.  
</pre>

* Redux was not designed to work with react. So, We are using React-Redux library which contains a bunch of helper functions inside of it to work redux with react.   
<pre>
  React  -->   React-Redux     --> Redux   
	 <--  (Gets React and  <--   
	       Redux to work   
	       together)   
</pre>	       

* __How React-Redux works?__:-   
