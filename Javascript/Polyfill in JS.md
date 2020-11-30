###### Q) What is Polyfill?

=> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. ... The polyfill uses non-standard features in a certain browser to give JavaScript a standards-compliant way to access the feature.

```javascript
let name = {
  first: "Paras",
  last: "Agrawal",
};

const printFullName = function (hometown, state) {
  console.log(this.first + " " + this.last + " " + hometown + " " + state);
};

Function.prototype.mybind = function (...args) {
  // args is array
  // this -> printFullName
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyFullName2 = printFullName.mybind(name, "Blr");
printMyFullName2("Karnataka");
```



