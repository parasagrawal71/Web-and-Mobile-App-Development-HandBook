```javascript
const obj = {
    a: 1,
    b: 1
}

const {a:elem1, b:elem2} = obj;

console.log(a)
// Uncaught ReferenceError: a is not defined

console.log(elem1)
// 1
```


