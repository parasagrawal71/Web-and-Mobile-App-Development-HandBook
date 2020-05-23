##### Call Stack:-

First one to be pushed in call stack is *<u>Global Execution Context  (anonymous)</u>*

```js
function addNums(x,y){
	console.log(subTwo(x + y));
}

function subTwo(sum){
	return sum - 2;
}

debugger;
addNums(2,10)
```

##### Stack Overflow:-

```javascript
function recursion() {
	console.count()
	recursion()
}

// Output:- 
// ... default: 13968
// Uncaught RangeError: Maximum call stack size exceeded

// After 13968 calls
```

