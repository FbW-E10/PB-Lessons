# Recursion in Javascript
![enter image description here](https://miro.medium.com/max/2560/1*wnPcCpnb0ttOi61niPyvTA.jpeg)

_The function calls itself until someone stops it._
_**Recursion** is when a function calls itself until someone stops it. If no one stops it then it'll **recurse** (call itself) forever._
 

Recursive functions let you perform a unit of work multiple times. This is exactly what `for/while` loops let us accomplish! Sometimes, however, recursive solutions are a more elegant approach to solving a problem._

in other words recursion is : 
1. repetitive
2. it takes a modified copy of the original Data
3. it has an exit or termination condition

```javascript 
// countdown

let counter = 10;

while(counter > 0) {

console.log(counter--);

}
``` 

```javascript 
// recursive contdown function

let countdown = function(value) {

if (value > 0) {

console.log(value);

return countdown(value - 1);

} else {

return value;

}

};

(countdown(10));

// 10

// 9

// 8

// 7

// 6

// 5

// 4

// 3

// 2

// 1
 
```  
```javascript 
// factorial

let factor = function(number) {

let result = 1;

let count;

for (count = number; count > 1; count--) {

result *= count;

}

return result;

};
console.log(factor(6)); // 720
```  

```javascript 
// recursive factorial function

let factorial = function(number) {

if (number <= 0) { // terminal case

return 1;

} else { // block to execute

return (number * factorial(number - 1));

}

};

console.log(factorial(6)); // 720
``` 
## Infinite Recursion

Recursion have the Infinite loop danger. It's not hard to write a self-referencing function that'll crash your browser.
```js
//THIS RUNS FOREVER
function start() {
    console.log('starting..');
    starting();
}

starting();
// starting..
// starting..
// ...

```

### Base case

This is known as the **base case**–our recursive `factorial` had one.
```js
if (number <= 0) { // terminal case

return 

}
``` 
 
## Summary
- _Recursion is when a function calls itself until someone stops it_
- _It can be used instead of a loop._
- _If no one stops it, it'll recurse forever and crash your program._
- _A **base case** is a condition that stops the recursion. Don't forget to add them!_ 
- _Loops use extra state variables for tracking and counting, while recursion only uses the provided parameters._
