// countdown using for loop 

// for(let i = 10 ; i> 0 ; i--){
//     console.log(i);
// }

// countdown using recursive function 
function countdown(num){
    if(num < 0){
        return
    }
    console.log(num);
    countdown(num -1);

}
countdown(10);

// function countup(num){
//     if(num > 10){
//         return
//     }
//     console.log(num);
//     countup(num + 1);

// }
// countup(0)

function countup2(num){
    if(num <= 20){
        console.log(num);
        countup2(num +1);
    }
    
   
}
countup2(10);



// factorial 5 = 5 * 4 * 3 * 2 * 1 
// factorial 3 = 3 * 2 * 1 = 6 

function factor(num){
    let result = 1 
    for( let i = num ; i > 1 ;i--  ){
        result = result * i
    }
    return result
}
console.log('#### factorial #####');
console.log(factor(4));


// factorial using recursive function 

function factorial(num){
    if(num <= 1 ){
       return 1 ;
    }
    else {
        return (num * factorial(num -1)); // 3 * factorial(2) => 3 * 2 * factorial(2 -1 ) => 3 * 2 * ( 1 * factorial(1 -1))
    }

}
console.log(' ##### recursive factorial #######');
console.log(factorial(1));

function printstring(){
    console.log(' ABC ');
    printstring()
}
printstring();