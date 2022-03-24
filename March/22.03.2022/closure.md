# Closure in Javascript
![enter image description here](https://www.thecreativedev.com/wp-content/uploads/2017/05/javascript-closure.png)
## What is closure?

_Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned._

if we create a nested function, the inner function can access variables and parameters of an outer function
example : 
```javascript
 
function OuterFunction() {

    let outerVariable = 1;

    function InnerFunction() {
        console.log(outerVariable);
    }

    InnerFunction();
}
OuterFunction() // 1 
```

```javascript
 
function OuterFunction() {

    let outerVariable = 100;

    function InnerFunction() {
        console.log(outerVariable);
    }

    return InnerFunction;
}
let innerFunc = OuterFunction();

innerFunc(); // 100
// InnerFunction() can access outerVariable even if it will be executed separately
 ```
```javascript
 
function counterFun() {
    let counter = 0;

    function increaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

let count = counterFun();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4

```
> Closure is valid in multiple levels of inner functions
- A colsure is always a nested function
```javascript 
  let myVar = "I am global";

  function outerFunction(){

  console.log(myVar);

  }
  outerFunction() // I am global
```
```javascript 
let myVar = "I am global";

function outerFunction(){

let myVar = "I am just a local scope!"

let innerFunction = function() {

return console.log(myVar);

}

return innerFunction;
outerFunction()(); // // I am just a local scope! 

}
``` 
```javascript 
function makeAdder(x) {

// parameter `x` is an inner variable

// inner function `add()` uses `x`, so

// it has a "closure" over it

function add(y) {

return y + x;

};

return add;

}
let plusOne = makeAdder( 1 )
// `plusOne` gets a reference to the inner `add(..)`

// function with closure over the `x` parameter of

// the outer `makeAdder(..)`
let plusTen = makeAdder( 10 );
// `plusTen` gets a reference to the inner `add(..)`

// function with closure over the `x` parameter of

// the outer `makeAdder(..)`

plusOne( 3 ); // 4 <-- 1 + 3

plusOne( 41 ); // 42 <-- 1 + 41

plusTen( 13 ); // 23 <-- 10 + 13
``` 
```javascript 
function init() {

let name = "Mozilla"; // name is a local variable created by init

function displayName() { // displayName() is the inner function, a closure

console.log(name); // displayName() uses variable declared in the parent function

}

displayName();

}

init();
``` 
```javascript 
function makeTitler(x) {

function title(y) {

return `${x} ${y}`;

};

return title;

}
let mrTitle = makeTitler("Mr.");

let msTitle = makeTitler("Ms.");

msTitle("Lara");

mrTitle("David");

makeTitler("Dr.")("John");

makeTitler("Prof.")("John");
``` 
