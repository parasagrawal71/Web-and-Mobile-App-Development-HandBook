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

* Component LifeCycle (Time starts from 1 -> 5):-   
1. constructor   
2. render   
	content visible on screen   
3. componentDidMount  
	sit and wait for updates  
4. [render] x n   
5. componentDidUpdate x n   
	sit and wait until this component is unmounted   
6. componentWillUnmount   