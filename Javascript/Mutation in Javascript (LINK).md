https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa	


* __Mutating Array__   
const COLORS = ['red', 'green']   

COLORS.push('blue')   
console.log(COLORS) // ["red", "green", "blue"]   
COLORS.pop()   
console.log(COLORS) // ["red", "green"]   
COLORS[0] = 'pink'   
console.log(COLORS) // ["pink", "green"]   


* __Mutating Object__   
const obj = {name: 'Paras'}   

obj.name = 'Sam'   
console.log(obj) // {name: 'Sam'}   
obj.age = 20   
console.log(obj) // {name: 'Sam', age: 20}   


* __Strings and Numbers are immutable in javascript__   
Ex-1   
__const__ name = "Sam"   

name[0] = "R" // Inside react application, TypeError: Cannot assign to read only property '0' of string 'Sam'   
console.log(name) // Sam(In browser's console)   

Ex-2   
__let__ name = "Sam"   

name[0] = "R" // SAME ERROR: Cannot assign to read only property '0' of string 'Sam'   

Ex-3   
__const__ name = "Sam"   

name = "Paras" // TypeError: Assignment to constant variable.	

Ex-4   
__let__ name = "Sam"   

name = "Paras" // NO ERROR	
console.log(name) // Paras	