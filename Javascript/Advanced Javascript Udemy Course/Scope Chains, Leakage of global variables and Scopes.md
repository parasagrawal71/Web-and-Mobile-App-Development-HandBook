- Scopes:-

  Lexical Scope (or, static scope):- Where the function is defined/written.

  Dynamic Scope:- Where the function is called.



- Scope Chain goes down to functions context lexically (where code is written) till global execution context.



- **Leakage of global variables**:-

  ```javascript
  function weird() {
  	height = 50; 
      // height is not defined in function scope so it will go up in scope chain but still there is no height in global scope, so it gets defined there
      return height;
  }
  
  weird()
  
  // OUTPUT:-
  // 50
  ```

  

  ```javascript
  'use strict'
  
  function weird() {
  	height = 50;
      return height;
  }
  
  weird()
  
  // OUTPUT:-
  // Uncaught ReferenceError: height is not defined
  ```




- Function Scope vs Block Scope:-

  let and const variable are not accessible outside block scope (curly braces '{}')

  Whereas 'var' variables are accessible

  ```javascript
  if (5 > 4) {
      var secret = '12345';
  }
  console.log('secret by var', secret); // 12345
  
  if (5 > 4) {
      let/const secret = '12345';
  }
  console.log('secret by let/const', secret); // Uncaught ReferenceError: secret is not defined
  ```

  

  Even var is not accessible outside function scope

  ```javascript
  function a() {
      var/let/const secret = '12345';
  }
  console.log('secret from function', secret); // Uncaught ReferenceError: secret is not defined
  ```

  

