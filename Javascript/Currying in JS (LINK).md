#### Currying in JavaScript:-

https://codeburst.io/currying-in-javascript-ba51eb9778dc



Definition:- 

**Currying is a technique of evaluating function with *multiple arguments*, into sequence of function with single argument.**

Two ways of Currying:-

1. Using bind
2. Using closure



1. Using bind: 

   ```javascript
   const multiply = function (x, y) {
   
    	console.log(x * y);
   
   };
   
   const multiplyByTwo = multiply.bind(this, 2); // No use of 'this' here. Replace 'this' with null, still same result 
   
   multiplyByTwo(3);
   ```

   

2. Using closure (Own Implementation apart from lodash's curry method):

   ```javascript
const multiply = (x) => {
   
    return function (y) {
   
     	console.log(x * y);
   
    };
   
   };
   
   const multiplyByTwo = multiply(2);
   multiplyByTwo(10);
   ```