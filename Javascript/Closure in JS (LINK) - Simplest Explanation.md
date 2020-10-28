#### A simple guide to help you understand closures in JavaScript

https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

NOTE: The variable `c` no longer exists, although the variable `b` exists as a closure within `inner`.



MDN Definition:-

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.



Benefits:-

1. Memory efficient:-

   ```javascript
   const heavyDuty = (index) => {
       const bigArray = new Array(7000).fill('VAL');
       console.log('Array Created!');
       return bigArray[index];
   }
   
   heavyDuty(777);
   heavyDuty(227);
   heavyDuty(767);
   
   // OUTPUT:-
   // Array Created!
   // Array Created!
   // Array Created!
   // "VAL"
   
   -------------------------------------------------------------------
       
   const heavyDuty2 = () => {
       const bigArray = new Array(7000).fill('VAL');
       console.log('Array 2 Created!');
       return function(index){
           return bigArray[index];
       }
   }
   
   const effHeavyDuty = heavyDuty2();
   effHeavyDuty(213);
   effHeavyDuty(324);
   effHeavyDuty(245);
   
   // OUTPUT:-
   // Array 2 Created!
   // "VAL"
   ```

   

2. Encapsulation:-

   ```javascript
   const makeNuclearButton = () => {
     let timeWithoutDestruction = 0;
     const passTime = () => timeWithoutDestruction++;
     const totalPeaceTime = () => timeWithoutDestruction;
     const launch = () => {
       timeWithoutDestruction = -1;
       return '💥';
     }
   
     setInterval(passTime, 1000);
     return {totalPeaceTime}
   }
   
   const ww3 = makeNuclearButton();
   ww3.totalPeaceTime()
   ```



- ```javascript
  const array = [1,2,3,4];
  for(var i=0; i < array.length; i++) { // <-- 'var'
    setTimeout(function(){
      console.log('I am at index ' + i)
    }, 3000)
  }
  
  // OUTPUT:-
  // I am at index 4
  // I am at index 4
  // I am at index 4
  // I am at index 4
  
  --------------------------------------------------------------------
  
  const array = [1,2,3,4];
  for(let i=0; i < array.length; i++) { // <---- Coz of 'let' block scope is being used here
    setTimeout(function(){
      console.log('I am at index ' + i)
    }, 3000)
  }
  
  // OUTPUT:-
  // I am at index 0
  // I am at index 1
  // I am at index 2
  // I am at index 3
  
  --------------------------------------------------------------------
  
  const array = [1,2,3,4];
  for(var i=0; i < array.length; i++) { // <-- 'var'
    (function(closureI) {
      setTimeout(function(){
        console.log('I am at index ' + closureI)
      }, 3000)
    })(i)
  }
  
  // OUTPUT:-
  // I am at index 0
  // I am at index 1
  // I am at index 2
  // I am at index 3
  ```

  