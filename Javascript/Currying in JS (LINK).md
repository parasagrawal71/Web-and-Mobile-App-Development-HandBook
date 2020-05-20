#### Currying in JavaScript:-

https://codeburst.io/currying-in-javascript-ba51eb9778dc

<br />

Definition:- 

**Currying is a technique of evaluating function with *multiple arguments*, into sequence of function with single argument.**

Two ways of Currying:-

1. Using bind
2. Using closure

<br />

1. Using bind: 

   `const multiply = function (x, y) {`

    `console.log(x * y);`

   `};`

   `const multiplyByTwo = multiply.bind(this, 2);`

   `multiplyByTwo(3);`

2. Using closure (Own Implementation apart from lodash's curry method):

   `const multiply = (x) => {`

    `return function (y) {`

     `console.log(x * y);`

    `};`

   `};`

   `const multiplyByTwo = multiply(2);`

   `multiplyByTwo(10);`

   

   

   

   