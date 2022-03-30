   
// NESTED LOOP 

// LOOP INSIDE LOOP

for (let i = 1; i <= 5; i++){
  for (let j = 1; j <= 3;j++){
      console.log(`[ i ==> ${i} ] [ j ==> ${j} ]`)
  }
}

/**
[ i ==> 1 ] [ j ==> 1 ]
[ i ==> 1 ] [ j ==> 2 ]
[ i ==> 1 ] [ j ==> 3 ]
[ i ==> 2 ] [ j ==> 1 ]
[ i ==> 2 ] [ j ==> 2 ]
[ i ==> 2 ] [ j ==> 3 ]
[ i ==> 3 ] [ j ==> 1 ]
[ i ==> 3 ] [ j ==> 2 ]
[ i ==> 3 ] [ j ==> 3 ]
[ i ==> 4 ] [ j ==> 1 ]
[ i ==> 4 ] [ j ==> 2 ]
[ i ==> 4 ] [ j ==> 3 ]
[ i ==> 5 ] [ j ==> 1 ]
[ i ==> 5 ] [ j ==> 2 ]
[ i ==> 5 ] [ j ==> 3 ]
 */

//------------######---------
/**
 Create a function named getEvenNumbers accept a 2D array as an argument,
  and return the even numbers in an array.

  const arrayInsideOfAnArray = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14], 
    [3, 10, 26, 7, 2]
];

  getEvenNumbers(arrayInsideOfAnArray) ==> [2,24,8,4,0,28,14,10,26]
 */

const arrayInsideOfAnArray = [
  [1, 2, 1, 24], 
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14], 
  [3, 10, 26, 7, 2]
];

console.log(arrayInsideOfAnArray[3])//[ 7, 4, 28, 14 ]

console.log(arrayInsideOfAnArray[3][3]) // 14


function getEvenNumbers_1(arr) {
  let evenNumbersStore = []
  for (let parentArrayIndex = 0; parentArrayIndex < arr.length; parentArrayIndex++){
    let elementInParentArray = arr[parentArrayIndex]
    for (let nestedArrayIndex = 0; nestedArrayIndex < elementInParentArray.length; nestedArrayIndex++){
      let elementInNestedArray = arr[parentArrayIndex][nestedArrayIndex]
      if (elementInNestedArray % 2 === 0 && !evenNumbersStore.includes(elementInNestedArray)) {
        evenNumbersStore.push(elementInNestedArray)
      }
      
    }
  }

  return evenNumbersStore
  
}

console.log(getEvenNumbers_1([
  [1, 2, 1, 24], 
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14], 
  [3, 10, 26, 7, 2]
])) // [2,24,8,4,0,28,14,10,26]

//--------#######----------
// with lovely i and j
function getEvenNumbers_2(arr) {
  let store = []
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] % 2 === 0 && !store.includes(arr[i][j])) {
        // arr[i][j] => the number inside nested array
        store.push(arr[i][j])
      }
    }
  }
  return store
}

console.log(getEvenNumbers_2([
  [1, 2, 1, 24], 
  [8, 11, 9, 4],
  [7, 0, 7, 27, 4]
])) // [2 ,24 ,8 ,4 ,0 ]

