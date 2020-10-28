'var' and 'function' keywords are hoisted whereas 'const' and 'let' are not.

('var' is partially hoisted which means it's declared but assigned undefined value initially)

```javascript
console.log(num);
console.log(sing());

var num = 2;

// function declaration
function sing() {
    console.log('singing......');
}

// undefined <-- memory is allocated for variable 'num' without its value, so value is undefined
// singing...
// undefined <-- function returns undefined (if return statement added, it shows whatever is returned)

----------------------------------------------------------------------------------------

console.log(sing2()) // sing2 is not a function
console.log(sing2) // undefined

// function expression
var sing2 = function() {
    console.log('singing second time.....')
}




```

