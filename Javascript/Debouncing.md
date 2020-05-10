<pre>
const getData = (arg) => {
  console.count("Fetching Data... " + arg);
};

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
</pre>