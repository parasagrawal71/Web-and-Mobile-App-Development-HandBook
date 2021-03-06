#### Three main dependencies of react are:-   

1. Babel

2. Webpack

3. Dev Server

   

###### Q) What is Babel?

=> Babel is a free and open-source JavaScript compiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is popular tool for using the newest features of the JavaScript programming language.
Type: compiler

Babel converts the JSX into JS codes(React.createElement) which then converted into HTML elements.



###### Q) Why we use className keyword instead of class in JSX?, and does class keyword works?

=> Yes, class works. But we shouldn't use 'class'. The reason is that it will be confused with 'class' keyword used for creating components. Example, class App extends React.Component



__Component Life cycle__ (Time starts from 1 -> 5):-   

```
1. constructor	// One-time setup(Ex- State Initialization)   
2. render	// Return JSX only, Recommended.
   content visible on screen   
3. componentDidMount	// Data-Loading here(Ex- API Calls), Recommended.
   sit and wait for updates  
4. [render] x n   
5. componentDidUpdate x n	// More Data-Loading here whenever state/props changes.
   sit and wait until this component is unmounted   
6. componentWillUnmount	// Cleanup
```



__Redux Cycle__:-  

```
Action Creator -->  Action  -->  dispatch  -->  Reducers  -->  State   
(Function)     --> (Object) --> (Function) --> (Function) --> (Object)
```



Definitions:- 
	- Action Creator is a function that is going to create or return a plain JS object.
	- This plain JS object returned by Action Creator is an action. An action has a type property and payload property. Type property(required) describes some change that we want to make inside of our data and Payload property(optional) describes some contexts around the change that we want to make.
	- dispatch function is going to take in an action. It's going to make copies of that object and then pass it off to a bunch of different places inside of our application.
	- Reducer is a function that is responsible for taking in an action and some existing amount of data. It's going to process that action and then make some change to the data and then return it so that it can be centralized in some other other location.
	- State is a central repository of all information that has been created by our reducers.



Redux codepen link:- https://codepen.io/parasagrawal71/pen/VwLJpaZ
(same code available in "redux in vanilla JS" folder).   

```
To change state of our app, we call an.. --> [Action Creator] --> produces an.. --> [Action] --> 
Gets fed to.. --> [dispatch] --> Forwards the action to each reducers.. --> [Reducers] --> 
Creates new.. --> [State] --> Wait until we need to update state again.
```

 


* Redux was not designed to work with react. So, We are using React-Redux library which contains a bunch of helper functions inside of it to work redux with react. 

  ```
  React  -->   React-Redux     --> Redux   
  	 <--  (Gets React and  <--   
  	       Redux to work   
  	       together)  
  ```

  


* __How React-Redux works?__:-   

  ```
     - - - - - - -  (as prop)
    |    store   |  --------> [Provider]  (at the Top of the heirarchy, above App)
    | (reducers) |                |
     - - - - - - - 	       \_/
  			      [App] 
  			        |
      - - - - - - - -	       \_/
    | Action Creators | 	    [Connect] (communicates with the Provider through context system not the prop system)
      - - - - - - - -	        |
  			       \_/
  		           [Components]
  		           
  		           -------------------
  		           
     - - - - - - -  (as prop)	    |	              |
    |    store   |  --------> [Provider]	   <-----     |  
    | (reducers) |                |	        |     |
     - - - - - - - 	       \_/     (Tell me |     |
  			      [App]   about any |     | (here is the new data with changes)
  			        |      changes  |     |
   - - - - - - - -  (change)     \_/     in data) |     |
  |Action Creators| ------->  [Connect]     -------     |
   - - - - - - - -    		|        <-------------	
  		       (data as |
  		         prop) \_/
  			   [Components]
  		   	
  ```

  

###### Points:- 

 - Provider and Connect are the components that are going to be created by react-redux library. We will be creating instances of them and pass some props into both of them to configure them to work.

 - After combining all the reducers, we get something called store that contains all our reducers and state. This is passed as a prop to Provider. Then, Provider will have eternal reference to the store. It will be providing informations to all of our components.

 - Provider is rendered at the top of the heirarchy. It means App is shown inside of Provider.

 - Context system allows any Parent to communicate with any child even if there are childs in-between such as Provider to Connect with App in-between. 

   

* __What is react-thunk__:-
Redux-thunk is a middleware to help us make network requests from redux side of our app.
Q) What is Middleware?
A) Middleware is computer software that provides services to software applications beyond those available from the operating system.
Example,
The term "Middleware" applies to the redux library. Middleware are essentially functions that are going to change the behaviour of our redux store. So they will add new capabilities or new features to the redux side of our application.   

* Middleware in Redux:-   
	- Functions that gets called with every action we dispatch.   
	- Has ability to stop, modify, or otherwise mess around with actions.   
```
To change state of our app, we call an.. --> [Action Creator] --> produces an.. --> [Action] --> 
Gets fed to.. --> [dispatch] --> Forwards action to --> __[Middleware]__ --> sends action to --> [Reducers] --> 
Creates new.. --> [State] --> Wait until we need to update state again.
```




* Normal Rules:-   
	- Action Creators __must__ return action objects.   
	- Actions must have a type property.   
	- Actions can optionally have a payload.   

* Rules with Redux-thunk:-   
	- Action Creators __can__ return action objects.   
	OR   
	- Action Creators __can__ return functions(then redux-thunk will automatically calls the function).   
	- If an action object gets returned, it must have a type.   
	- If an action object gets returned, it can optionally have a 'payload'.   

* Check Fig1 in diagrams folder inside this folder - This shows how redux-thunk can return a function or an action.   

* __Rules of Reducers__:-
	- Must return any value besides 'undefined'   
	- Produces 'state', or data to be used inside of your app using only previous state and the action.   
	```
	First time a reducer is called(each reducer is automatically invocated one time when redux app starts).
		undefined    Action#1  <-- Two arguments to a reducer
		    |__       __|
		       |     |
		       REDUCER
			  |
		       STATE v1
```
	
	
	Example, const selectedSongReducer = (selected_song = null, action) => {}
	selectedSongReducer(undefined, {type: 'SOMETHING'})    <-- [automatic invocation]
	
	ES2015 Syntax:- selected_song = null // null as default value which is executed only once at the first time.
	Normally, it is
	if(selected_song === undefined) {
		selected_song = null;
	}


	Second time a reducer is called
		 STATE v1    Action#2
		    |__       __|
		       |     |
		       REDUCER
			  |
	               STATE v2
	
	Third time a reducer is called
		 STATE v2    Action#3
		    |__       __|
		       |     |
		       REDUCER
			  |
	               STATE v3
	So on
	
	- Must not return reach 'out of itself' to decide what value to return (reducers are pure).   
	
	    Previuos State    Action
		    |__       __|
		       |     |    //BAD
		       REDUCER   ------>   [API REQUEST]  
			  |
	               New State
	
	const someReducer = (state, action) => {
		// BAD
		return document.querySelector('input')
		
		// BAD
		return axios.get('/posts')
		
		// GOOD, Use argument values
		return state + action;
	}
	
	
	- Must not mutate its input 'state' argument.   
	
	  Incase of Array and Object, don't mutate it as these are mutable in javascript.
	  Incase of Strings and Numbers since they are immutable, there is no problem like this.
	  const someReducer = (state, action) => {
		We can mutate state, there is no problem technically. Redux is not going to throw any error.
		But Redux uses !== operator which comapares references of object or array, so even if we have changed the value of object or array react application will not re-render as !== condition wouldn't be satisfied.(as per my understanding)
	
		//State is Array: BAD
		state[0] = 'Sam'
		state.pop()
		state.push('something')
	
		//State is Object: BAD
		state.name = 'Sam'
		state.age = 30
	
		return state;
	  }   

* __How React-router works?__	
	```
	     (History)       -->       (BrowserRouter)
	Keeps track of the        Listens to "history" for
	address bar in your	  any changes to the URL.
					  ___|___
					 |       |
				        \_/     \_/
				      Route	Route 			Visible only when the 'path' matches the current URL.
				      path="/"	path="/pagetwo"
				     [PageOne   [PageTwo
				     Component]  Component]	
	```

	
	
* In Redux-Devtools:- 
  Debug session:- Saves all data in Redux store between refreshes of the page. 
  Use debug session as:- 
  http://localhost:3000/?debug_session=fdgdfg [randomstring]
  http://localhost:3000/?debug_session=logged_in [named debug session]
  http://localhost:3000/?debug_session=logged_out [named debug session]

* Context System:-
There are two ways of getting information into the context object(or, pipe) and two ways of getting information out of context object.   
```
   Source of Data {   [Default Value]  or  | Parent Component |
 			    |		   |    [Provider]    |
                            |   		    |
                            |_______________________|
					|
				  Context Object
			    ____________|___________
			   |                        |
                           |                        |
 Things that uses {   [this.context]            [Consumer]
 data             		   NestedChild
```

Using this.context, we can access only one context variable. So instead if we use Consumer approach then we can access multiple contexts.   