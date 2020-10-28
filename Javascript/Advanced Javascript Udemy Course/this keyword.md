- **'this' is the <u>*object*</u> that the function is a property of.**

  ```javascript
  function a() {
      console.log(this);
  }
  a();
  
  // OUTPUT:-
  // Window {... }
  // this points to window object
  
  Since a() means window.a()
  
  ```

  - obj.someFunc(// Inside, 'this' is obj)

  ```javascript
  function b() {
      'use strict' // It can be written at the top and same output
      console.log(this);
  }
  b();
  
  // OUTPUT:-
  // undefined
  ```



- this = who called me ?

- 'this' keyword is not lexically scoped, it means that it doesn't matter where you write 'this'. Only thing matter is which object called it.

  ```javascript
  const obj = {
  	name: 'Billy',
      sing() {
          console.log('1', this);
          var anotherFunc = function() {
              console.log('2', this);
          }
          anotherFunc()
      }
  }
  obj.sing()
  
  // OUTPUT:-
  // 1 {name: "Billy", sing: f}
  // 2 Window {... } <------- ***
  
  // Always check what 'object' comes before dot of function
  // HERE, obj.sing()
  // anotherFunc() means window.anotherFunc()
  
  --------------------------------------------------------------------
  
  const obj = {
  	name: 'Billy',
      sing() {
          console.log('1', this);
          var anotherFunc = () => { // <---- ARROW FUNCTION
              console.log('2', this);
          }
          anotherFunc()
      }
  }
  obj.sing()
  
  // OUTPUT:-
  // 1 {name: "Billy", sing: f}
  // 2 {name: "Billy", sing: f}
  
  --------------------------------------------------------------------
  
  const obj = {
  	name: 'Billy',
      sing() {
          console.log('1', this);
          var anotherFunc = function() {
              console.log('2', this);
          }
          return anotherFunc.bind(this);
      }
  }
  obj.sing()()
  
  // OUTPUT:-
  // 1 {name: "Billy", sing: f}
  // 2 {name: "Billy", sing: f}
  
  --------------------------------------------------------------------
  
  const obj = {
  	name: 'Billy',
      sing() {
          console.log('1', this);
          var self = this;
          var anotherFunc = function() {
              console.log('2', self);
          }
          anotherFunc()
      }
  }
  obj.sing()
  
  // OUTPUT:-
  // 1 {name: "Billy", sing: f}
  // 2 {name: "Billy", sing: f}
  
  ```

  

- Two benefits of 'this' keyword
  - Gives methods access to their object.
  - Execute same code for multiple objects.