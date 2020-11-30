```javascript
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
```



Akshay Saini's Video:-  

https://www.youtube.com/watch?list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&v=Zo-6_qx8uxg&index=1&app=desktop