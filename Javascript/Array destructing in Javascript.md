Array Destructuring:-   
In array destructuring, name of variables that is used to store value can be different unlike object destructuring.   

<pre>
const colors = ['red', 'green']
const [color1, color2] = colors // color1 = 'red', color2 = 'green'

const nums = [1,2,3]
const [num1, num2] = nums // num1 = 1, num2 = 2
const [n1, n2, n3, n4] = nums // n1 = 1, n2 = 2, n3 = 3, n4 = undefined
</pre>