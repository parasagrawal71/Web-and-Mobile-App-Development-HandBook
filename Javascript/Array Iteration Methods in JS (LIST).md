__Array Iteration Methods in Javascript:-__   
Go to MDN(Official Documentation):-   
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)   
_*There are lot of points not explained in the w3schools or other sites, so read from MDN._*   


let arr = [10, 20, 30, 40, 50];   

* __forEach__  Return value: undefined   
<pre>
arr.forEach((value, index, array) => {
  console.log(value, index, array);
})

There is no way to stop or break a forEach() loop other than by throwing an exception.
If you need such behavior, the forEach() method is the wrong tool.
</pre>


* __map__  Return value: A new array with each element being the result of the callback function.   
<pre>
arr.map((value, index, array) => {
  console.log(value, index, array);
})
</pre>


* __filter__  Return value: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.      
<pre>
arr.filter((value, index, array) => {
  console.log(value, index, array);
  return value > 25;
})
</pre>


* __reduce__  Return value: The single value that results from the reduction.   
The reduce() method works from left-to-right in the array.   
<pre>
arr.reduce((accumulator, currValue, index, array) => {
  console.log(accumulator, currValue, index, array);
  return accumulator + currValue;
}, 100); // 100 is initialValue to accumulator
</pre>


* __reduceRight__  Return value: The single value that results from the reduction.   
right-to-left.   
<pre>
arr.reduceRight((accumulator, value, index, array) => {
  console.log(accumulator, value, index, array);
  return accumulator + value;
}, 100); // 100 is initialValue to accumulator
</pre>


* __every__  Return value: true if the callback function returns a truthy value for every array element. Otherwise, false.   
<pre>
arr.every((value, index, array) => {
  console.log(value, index, array);
  return value > 9;
});
</pre>


* __some__  Return value: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.   
<pre>
arr.some((value, index, array) => {
  console.log(value, index, array);
  return value > 50;
});
</pre>


* __indexOf__  Return value: The first index of the element in the array; -1 if not found.   
If the item is present more than once, it returns the position of the first occurrence.   
Syntax:- arr.indexOf(item, start)   
If the provided start value is a negative number, it is taken as the offset from the end of the array. Note: if the provided start is negative, the array is still searched from front to back.   
<pre>
arr.indexOf(30);
</pre>


* __lastIndexOf__  Return value: The last index of the element in the array; -1 if not found.   
Syntax:- array.lastIndexOf(item, start)   
The index at which to start searching backwards. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front.   
<pre>
arr.lastIndexOf(30);
</pre>


* __find__  Return value: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.   
<pre>
arr.find((value, index, array) => {
  console.log(value, index, array);
  return value > 9;
});
</pre>


* __findIndex__  Return value: The index of the first element in the array that passes the test. Otherwise, -1.   
<pre>
arr.findIndex((value, index, array) => {
  console.log(value, index, array);
  return value > 9;
});
</pre>