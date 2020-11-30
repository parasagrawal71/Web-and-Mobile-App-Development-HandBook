#### Q. 

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
new Promise(() => console.log('3'));
console.log('4');
```

=> 

```
Result:-
1
3
4
2
```

###### Promise vs setTimeout:-

=> https://stackoverflow.com/questions/38752620/promise-vs-settimeout

Promise.resolve schedules a microtask and the setTimeout schedules a macrotask. And the microtasks are executed before running the next macrotask



###### 6 Interview Questions That Combine Promise and setTimeout:- (Macrotask and Microtask are very well explained with examples and diagrams)

=> https://medium.com/javascript-in-plain-english/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e



#### Q. Following examples runs slow in chrome browser but faster in NodeJS env instead of having same v8 engine. why is that?

```javascript
for(var i=0;i<10000000000;i++){
    console.log(i);
}
```

=> Because in chrome browser, scope is window but in NodeJS it is global



