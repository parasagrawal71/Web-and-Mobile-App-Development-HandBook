There is a global execution context (called as anonymous), initially which is pushed to call stack.

Then, there will be new execution context for each function call.



There are two phases for each Execution Context:-

1. Creation Phase
2. Execution Phase

For Global Execution Context:-

```markdown
Global Object		this

		Hoisting       		 // <--- Creation Phase

----------------------------------------------------------

	    RUN CODE			// <---  Execution Phase
```



For Function Execution Context:-

```markdown
this				arguments

		Hoisting       		 // <--- Creation Phase
			 _ _ _ _ _ _ _ _ _ _ _ _
			|
			|	Variable / Local 
			|		Environment
			|
			
----------------------------------------------------------

	    RUN CODE			// <---  Execution Phase
```



Note: Hoisting happens at creation phase of each execution context.