#### Garbage Collection:-

- JS uses **Mark and Sweep** algorithm for garbage collection.
- 



###### NOTE:  

SoundCloud Example: Garbage Collection in Redux Applications (Interesting Read)

https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications



#### Memory Leaks:-

```javascript
let arr = [];

for (let i = 5; i > 1; i++) {
    console.count();
    arr.push(i-1)
}

// OUTPUT:-
// ... default: 12959

// After it browser crashes
```

Three reasons for memory leaks:-

1. Too many <u>*Global Variables*</u> by using 'var' keyword
2. Too many <u>*Event Listeners*</u> (we forget to remove them, like in SPA when we move back and forth repeatedly and we don't remove them)
3. Using *<u>setInterval</u>* (In case of we don't clear Interval, and if it references the objects it does this repeatedly after specified interval that garbage collector unable to clear this)

