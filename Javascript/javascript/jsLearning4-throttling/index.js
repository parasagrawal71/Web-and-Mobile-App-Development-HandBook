function expensive() {
  console.log("expensive function called");
}

// window.addEventListener("resize", expensive);

let betterExpensive = throttle(expensive, 500);

function throttle(fn, limit) {
  let flag = true; // flag is closure. closure:- sending a variable along with function
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

window.addEventListener("resize", betterExpensive);
