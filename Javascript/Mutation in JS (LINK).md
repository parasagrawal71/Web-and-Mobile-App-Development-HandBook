https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa	

Also check "Fig1 - Ways to avoid Mutation in JS" image in diagrams folder inside this folder.

- __Mutating Array__

  ```javascript
  const COLORS = ['red', 'green']
  
  COLORS.push('blue')
  console.log(COLORS) // ["red", "green", "blue"]
  COLORS.pop()
  console.log(COLORS) // ["red", "green"]
  COLORS[0] = 'pink'
  console.log(COLORS) // ["pink", "green"]
  ```

  

- __Mutating Object__

  ```javascript
  const obj = {name: 'Paras'}
  
  obj.name = 'Sam'
  console.log(obj) // {name: 'Sam'}
  obj.age = 20
  console.log(obj) // {name: 'Sam', age: 20}
  ```

  

- __Strings and Numbers are immutable in JavaScript__

  ```javascript
  Ex-1:
  const name = "Sam" <-- const
  
  name[0] = "R" // Inside react application, TypeError: Cannot assign to read only property '0' of string 'Sam'
  console.log(name) // Sam(In browser's console)
  
  Ex-2:
  let name = "Sam" <-- let
  
  name[0] = "R" // SAME ERROR: Cannot assign to read only property '0' of string 'Sam'
  
  Ex-3:
  const name = "Sam" <-- const
  
  name = "Paras" // TypeError: Assignment to constant variable.	
  
  Ex-4:
  let name = "Sam" <-- let
  
  name = "Paras" // NO ERROR
  console.log(name) // Paras	
  ```