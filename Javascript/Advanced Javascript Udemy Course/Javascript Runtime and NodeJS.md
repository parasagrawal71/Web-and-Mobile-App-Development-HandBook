#### JS Runtime Working Visually:-

http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBjJyk7DQp9DQoNCmZ1bmN0aW9uIGMoKSB7DQogICAgc2V0VGltZW91dChwcmludEhlbGxvLCAzMDAwKTsNCn0NCg0KZnVuY3Rpb24gYigpIHsNCiAgICBjKCk7DQp9DQoNCmZ1bmN0aW9uIGEoKSB7DQogICAgYigpOw0KfQ0KDQphKCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

```javascript
function printHello() {
    console.log('Hello from c');
}

function c() {
    setTimeout(printHello, 3000);
}

function b() {
    c();
}

function a() {
    b();
}

a();
```



```javascript
console.log('1');
setTimeout(() => {console.log('2')}, 0); // <-- 0 miliseconds
console.log('3')

// OUTPUT:-
// 1
// 3
// 2
```



NOTE:

**NodeJS is Javascript Runtime** not a Javascript engine, written in C++ language also in javascript for V8 engine and it is like executable file(.exe file) which provides runtime support for javascript.



```javascript
setTimeout(() => {console.log('1')}, 0);
Promise.resolve('hi').then(() => {console.log('2')});
console.log('3');

// OUTPUT:-
// 3
// 2
// 1
```



```javascript
console.log('1');
setTimeout(() => {console.log('2')}, 0);
setTimeout(() => {console.log('3')}, 3000);
setTimeout(() => {console.log('4')}, 1000);
setTimeout(() => {console.log('5')}, 0);
console.log('6');


// OUTPUT:-
// 1
// 6
// 2
// 5
// 4
// 3

```



- Similar to 'window' in browser, we have 'global' in nodejs.