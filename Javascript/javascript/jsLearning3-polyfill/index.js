let name = {
  first: "Paras",
  last: "Agrawal",
};

const printFullName = function (hometown, state) {
  console.log(this.first + " " + this.last + " " + hometown + " " + state);
};

let printMyFullName = printFullName.bind(name, "Blr");
printMyFullName("Karnataka");

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
