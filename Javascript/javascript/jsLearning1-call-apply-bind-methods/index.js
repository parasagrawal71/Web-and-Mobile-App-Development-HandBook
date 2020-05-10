let name = {
  first: "Paras",
  last: "Agrawal",
  printFullName: function () {
    console.log(this.first + " " + this.last);
  },
};

name.printFullName();

// ARROW FUNCTION
// let nameTemp = {
//   first: "Paras",
//   last: "Agrawal",
//   printFullName: () => {
//     console.log(this.first + " " + this.last);
//   },
// };

// nameTemp.printFullName(); // undefined undefined

let name2 = {
  first: "Aman",
  last: "Agrawal",
  // BAD
  //   printFullName: function () {
  //     console.log(this.first + " " + this.last);
  //   },
};

// Function Borrowing
// Syntax: functionName.call(reference, arg1, arg2, ..); // 1st argument is reference whom 'this' keyword will point. 2nd argument onwards are the arguments to the functionName
name.printFullName.call(name2);

// ******************************************************************************************************************* //

let printFullName = function (hometown, state) {
  console.log(
    this.first + " " + this.last + " from " + hometown + ", " + state
  );
};

let name3 = {
  first: "PARAS",
  last: "Agrawal",
};

printFullName.call(name3, "Bangalore", "Karnataka");

printFullName.apply(name3, ["Bangalore", "Karnataka"]);

let printMyFullName = printFullName.bind(name3, "Bangalore", "Karnataka");
printMyFullName();
