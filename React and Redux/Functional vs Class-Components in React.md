https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108   

* Because a functional component is just a plain JavaScript function, you cannot use setState() in your component. That’s the reason why they also get called functional stateless components. So everytime you see a functional component you can be sure that this particular component doesn’t have its own state.   

__This changed with the React 16.8 Hooks update! 
You can now use the useState hook to use state in your functional components.__   

* Another feature which you cannot use in functional components are lifecycle hooks. The reason is the same like for state, all lifecycle hooks are coming from the React.Component which you extend from in class components.   

__This also changed with the React 16.8 Hooks update! 
You can now use the useEffect hook to use lifecycle events in your functional components.__