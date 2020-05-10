<pre>
Call Method:- // Function Borrowing
Syntax: functionName.call(reference, arg1, arg2, ..); 
1st argument is reference whom 'this' keyword will point. 
2nd argument onwards are the arguments to the functionName.

Apply Method:-
Syntax: functionName.apply(reference, [arg1, arg2, ..]); 
2nd argument is the array of arguments passed to functionName.

Bind Method:-
Syntax: let bindedFunction = functionName.bind(reference, arg1, arg2, ..); // It returns the function reference
bindedFunction();

</pre>