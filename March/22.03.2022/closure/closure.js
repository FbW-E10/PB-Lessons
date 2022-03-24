// let name = "Max";

// function greetUser(){

//     console.log('Hello '+ name);

// }

// greetUser();

// name ="Mara";

// greetUser();


function greetUser(){
    let name = "Peter";

    return function(){
        console.log(name);
    }
}
const greet = greetUser();
//greet(); // call the inner function

function counter(){
    let counter = 0 ;
    return function(){
        return counter++;
    }

}
let closure = counter(); // just executed 
console.log(closure());
console.log(closure());
console.log(closure());
console.log(closure());

console.log('##################');

const closure2 = counter();
console.log(closure2());
console.log(closure2());

console.log('###### new example ############');

function addNumber(num1){
    return function(num2){
        return num1 + num2
    }
}
const addNumberCalling = addNumber(3); // executed 
console.log(addNumberCalling(7));



// ############################# new example 
function makeTitler(x) {

    function title(y) {
    
    return `${x} ${y}`;
    
    };
    
    return title;
    
    }
    let mrTitle = makeTitler("Mr.");
    
    let msTitle = makeTitler("Ms.");
    
  console.log( msTitle("Lara")); 
    
  console.log( mrTitle("David")); 
    
    // makeTitler("Dr.")("John");
    
    // makeTitler("Prof.")("John");