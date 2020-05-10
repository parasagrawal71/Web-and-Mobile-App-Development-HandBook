const getData = (arg) => {
  //   console.log(arg);
  //   console.count("Fetching Data... ", arg); // NOT PRINTING 'arg'
  //   console.log("Fetching Data... ", arg);
  console.count("Fetching Data... " + arg);
};

// CALLING DEBOUNCE METHOD DIRECTLY, NOT WORKING
// const debounce = () => {
//   let timer;
//   clearInterval(timer);
//   timer = setTimeout(() => {
//     getData();
//   }, 1000);
// };

// CALLING DEBOUNCE METHOD DIRECTLY, WORKING
// let timer;
// const debounce = () => {
//   clearInterval(timer);
//   timer = setTimeout(() => {
//     getData();
//   }, 300);
// };

// APPLY METHOD HAS REFERENCE OR CONTEXT AS 1ST ARGUMENT, THEN 2ND ARGUMENT IS ARRAY OF ARGUMENTS TO THE FUNCTION CALLED
// const debounce = (fn, delay) => {
//   let timer;
//   return () => {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       fn.apply();
//     }, delay);
//   };
// };

// 'args' IS NOT REQUIRED
// const debounce = (fn, delay) => {
//   let timer;
//   return function () {
//     // using arrow function here, return arguments undefined
//     clearInterval(timer);
//     let context = this,
//       args = arguments;
//     timer = setTimeout(() => {
//       fn.apply(context, arguments);
//       //   fn.apply(context, args);
//     }, delay);
//   };
// };

const debounce = (fn, delay) => {
  let timer;
  return function () {
    // using arrow function here, return arguments undefined
    clearInterval(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const callMethodUsingDebounce = debounce(getData, 300); // Name callMethodUsingDebounce as getDataUsingDebounce or getDataOverDebounce
