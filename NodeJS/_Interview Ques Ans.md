#### 19+ Advanced Node.js Interview Questions For Senior Developers:-

https://www.fullstack.cafe/blog/7-hardest-nodejs-interview-questions-and-answers

Few questions from above link:-



##### Q. If Node.js is single threaded then how it handles concurrency?

=> Node provides a single thread to programmers so that code can be written easily and without bottleneck. Node internally uses multiple POSIX threads for various I/O operations such as File, DNS, Network calls etc.

When Node gets I/O request it creates or uses a thread to perform that I/O operation and once the operation is done, it pushes the result to the event queue. On each such event, event loop runs and checks the queue and if the execution stack of Node is empty then it adds the queue result to execution stack.

This is how Node manages concurrency.



##### Q. **What are the benefits of using Node.js?**

=> Check "Pros and cons of Nodejs" file



##### Q. **What is an error-first callback?**

=> *Error-first callbacks* are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.

```javascript
fs.readFile(filePath, function(err, data) {
  if (err) {
    //handle the error
  }
  // use the data object
});
```



##### Q. **How Node prevents blocking code?**

=> By providing callback function. Callback function gets called whenever corresponding event triggered.



##### Q. **How can you avoid callback hells?**

=> To do so you have more options:

- **modularization**: break callbacks into independent functions
- use *Promises*
- use `yield` with *Generators* and/or *Promises*



##### Q. **What is Event Emmitter?**

=> All objects that emit events are members of EventEmitter class. These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```



##### Q. **What's the event loop?**

=> **The event loop** is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.



![img](https://i.stack.imgur.com/Lbs9z.png)



Every I/O requires a callback - once they are done they are pushed onto the event loop for execution. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.



##### Q. **Explain usage of NODE_ENV**

=> Node encourages the convention of using a variable called NODE_ENV to flag whether we’re in production right now. This determination allows components to provide better diagnostics during development, for example by disabling caching or emitting verbose log statements. Setting NODE_ENV to production makes your application 3 times faster.

```javascript
// Setting environment variables in bash before starting the node process
$ NODE_ENV=development
$ node

// Reading the environment variable using code
if (process.env.NODE_ENV === “production”)
    useCaching = true;
```



##### Q. **What are the timing features of Node.js?**

=> The Timers module in Node.js contains functions that execute code after a set period of time.

- **setTimeout/clearTimeout** - can be used to schedule code execution after a designated amount of milliseconds
- **setInterval/clearInterval** - can be used to execute a block of code multiple times
- **setImmediate/clearImmediate** - will execute code at the end of the current event loop cycle
- **process.nextTick** - used to schedule a callback function to be invoked in the next iteration of the Event Loop

```javascript
function cb(){
  console.log('Processed in next iteration');
}
process.nextTick(cb);
console.log('Processed in the first iteration');
```

Output:

```
Processed in the first iteration
Processed in next iteration
```



##### Q. **What tools can be used to assure consistent code style?**

=> ESLint and more



##### Q.

##### Q.

##### Q.