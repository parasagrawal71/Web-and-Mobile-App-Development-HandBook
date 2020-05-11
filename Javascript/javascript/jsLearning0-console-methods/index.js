console.log("javascript console methods");

// console.clear();

console.error("You made a mistake");

console.assert(1 === 2, "Not Equal");

const name = "Paras";
for (i = 0; i < 5; i++) {
  //   console.count();
  //   console.count("num");
  console.count(name);
}

console.warn("This is a warning");

console.time();
for (i = 0; i < 100; i++) {
  // some code
}
console.timeEnd();
