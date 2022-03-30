
// A function can be called with any number of arguments, no matter how it is defined.

//## The rest parameters can be mentioned in a function definition with three dots '...'. They literally mean “gather the remaining parameters into an array”.


function numbers(num_1,num_2, num_3, num_4 ) {
   return num_1 + num_2 + num_3 + num_4
}

console.log(numbers(1, 2, 3, 5, 100)) // 11
//-----#######-----
// With rest params
function numbers_2(...myParams) {
    // ...myParams => [ 1, 2, 3, 5 ]
    let total = 0
    for (let el of myParams) {
        total += el
    }
    return total
 }
 
console.log(numbers_2(1, 2, 3, 5, 100)) // 111
 //-----######------
function numbers_3(arr) {
    let total = 0
    for (let el of arr) {
        total += el
    }
    return total
 }
 // All the args in array
 console.log(numbers_3([1,2,3,5,100,22])) // 133