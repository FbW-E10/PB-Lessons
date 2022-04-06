/**
1. Key Value Pairs
Create an object profileData.
Add 4 key value pairs to the object: name, surname, age and city.
 */
const profileData = {
    name: "John",
    surname: "Smith",
    age: 33,
    city: "Paris"
}

//-------------------------------------//

/**
2. Object to Array
Write a function convertObjectToArray

It should take an object as an argument.

It should return a nested array of key value pairs.

See the example below.

Given Object

example = {
    "1": 10, 
    "2": 20, 
    "3": 30
}
Expected Output:

> console.log(convertObjectToArray(example));
[ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]
 */

function convertObjectToArray(object) {
    return Object.entries(object);
}

const myObj = {
    "1": 10,
    "2": 20,
    "3": 30
}

console.log(convertObjectToArray(myObj)); // [ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]

const convertObjectToArray_1 = (obj) => {
    const newArr = [];
    for (let key in obj) {
      newArr.push([key, obj[key]]);
    }
    return newArr;
  };

console.log(convertObjectToArray_1(myObj)); // [ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]

//-------------------------------------//
/**
3. Data Manipulation
Create a function convertArrayData.

It should take an array as an argument.

Use array methods to manipulate the data the array below.

The first two items in the array should switch positions.

The third item should be replaced by an item containing "milk".

Return the changed array.

Original Array

let beverages = ["coffee", "tea", "juice"];
Call your function to test it, and print the result to the console.

Expected output

> console.log(convertArrayData(beverages));
[ 'tea', 'coffee', 'milk' ]
 */
let beverages = ["coffee", "tea", "juice"];
const drinks = ["coffee", "tea", "juice"];
function convertArrayData(array) {
    array.pop();
    let reversed = array.reverse();
    reversed.push("milk");
    return reversed;
}


//console.log(convertArrayData(drinks)); // [ 'tea', 'coffee', 'milk' ]

const convertArrayData_1 = (arr) => {
    let [a, b, c] = [...arr];
    arr = [b, a, (c = "milk")];
    return arr;
  };
//console.log(convertArrayData_1(drinks)); //  [ 'tea', 'coffee', 'milk' ]


function convertArrayData_2(){
    beverages.splice(0,3, 'tea', 'coffee', 'milk')
    return beverages
}

//console.log(convertArrayData_2()); // [ 'tea', 'coffee', 'milk' ]

const convertArrayData_3 = arr => {
   arr.map((item, index, arr) => {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        arr[2] = 'milk';
    });
    return arr;

    /** Also works!
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        arr[2] = 'milk';
        return arr;
     */
};

//console.log(convertArrayData_3(beverages)); // [ 'tea', 'coffee', 'milk' ]


const convertArrayData_4 = function(array) {
    return [array[0], array[1], array[2]] = [array[1], array[0], "milk"]
};
// console.log(convertArrayData_4(beverages)); // [ 'tea', 'coffee', 'milk' ]


const convertArrayData_5 = (arr) => {
    arr.splice(0, 1, "tea");
    arr.splice(1, 1, "coffee");
    arr.splice(2, 1, "milk");
    return arr;
};

 //console.log(convertArrayData_5(beverages)); // [ 'tea', 'coffee', 'milk' ]


//-------------------------------------//
/**
4. Data Conversion
Create a function convertArraysToObject.

It should take two arrays as arguments.

first array cities should contain city names.

second array areas should contain strings with the cities areas in square kilometres

convert given arrays into object, with key value pairs using the Array method reduce

return the object as the result of your function.

Original Arrays

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];
Call your function and log the result to the console.

Expected output

> console.log(convertArraysToObject(cities, areas));
{
Berlin: '891.68 km2',
Hamburg: '755.3 km2',
Munich: '310.7 km2',
Stuttgart: '207.35 km2',
Duesseldorf: '217.41 km2'
}
 */

let array1= ["Berlin", "Hamburg", "Munich","Stuttgart","Dusseldorf"];
let array2 = ["891.68 km2", "755.3 km2","310.7 km2","207.35 km2","217.41 km2"];


const CovertArraysToObject=(array1,array2)=>{
    const result = array1.reduce((acc,item,index)=>{
        acc[item]=array2[index]
        return acc
    },{})
    return result
}


console.log(CovertArraysToObject(array1, array2))
/**
{
  Berlin: '891.68 km2',
  Hamburg: '755.3 km2',
  Munich: '310.7 km2',
  Stuttgart: '207.35 km2',
  Dusseldorf: '217.41 km2'
} 
 */

// right but we should use reduce :)
const convertArraysToObject_1 = (citiesArr, areasArr) => {
    const obj = {};
    citiesArr.forEach((citie, area) => {
      obj[citie] = areasArr[area];
    });
    return obj;
};

//console.log(convertArraysToObject_1(array1, array2))
/**
{
  Berlin: '891.68 km2',
  Hamburg: '755.3 km2',
  Munich: '310.7 km2',
  Stuttgart: '207.35 km2',
  Dusseldorf: '217.41 km2'
} 
 */

const convertArraysToObject_2 = (arr1, arr2) => {
    return arr1.reduce((obj, item, index)=> {
        return {...obj, [item]: arr2[index]};
    }, {})
};

//console.log(convertArraysToObject_2(array1, array2));
/**
{
  Berlin: '891.68 km2',
  Hamburg: '755.3 km2',
  Munich: '310.7 km2',
  Stuttgart: '207.35 km2',
  Dusseldorf: '217.41 km2'
} 
 */



//-------------------------------------//
/**
5. Create Grid
Create a function createGrid

It should return a nested array representing a 2D grid, filled with a char.

It should accept two arguments:

size (which determines the number of nested arrays and the number of elements in each nested array) and
char (which determines the characters in each nested array).
Call your function and print the return value to the console.

Example and expected output:

console.log(createGrid(3, "*"));
[ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]
 */

function createGrid(size, char) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid.push([]); // [ [  ], [  ], [  ] ]
        for (let j = 0; j < size; j++) {
            grid[i].push(char);
        }
    }
    return grid;
}
//console.log(createGrid(3, "*"))

const createGrid_1 = (num, char) => {
    const emptyArr = [];
    for (let i = 0; i < num; i++) {
      emptyArr.push(char.repeat(num).split(""));
    }
    return emptyArr;
};
  
//console.log(createGrid_1(3, "*")) // [ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]


const createGrid_2 = function (num, char) {
    let output = [];
    for (let i = 0; i < num; i++) {
      let nested = [];
      for (let j = 0; j < num; j++) {
        nested.push(char);
      }
      output.push(nested);
    }
    return output;
  };
  
//console.log(createGrid_2(3, '*')); // [ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]
  
const createGrid_3 = function (size, char) {
    let newArray = [];
    let nestedArray = []
    for (let i = 0; i < size; i++) {
        newArray.push(char);
        nestedArray.push(newArray);
    }
    return nestedArray;
};

console.log(createGrid_3(3, '*')); // [ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]

//-------------------------------------//
/**
6. Word Converter
Create a function wordConverter.

It should take an array of words as an argument and a string as a word suffix.

Use an array method, to add the suffix to the end of all words.

Important: Do not use a loop to complete this task.

Look at the expected output below.

Example

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
Call your function and print the returned value to the console.

Expected output

> console.log(wordConverter(adjectives, "er"));
[ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
 */

function wordConverter(arrayWords, suffix) {
    let converted = arrayWords.map(word => word += suffix);
    return converted;
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
//console.log(wordConverter(adjectives, "er"));// [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]


const wordConverter_1 = (array, suffix) => {
    return array.map((item) => `${item}${suffix}`);
};
  
const wordConverter_2 = (arr, str) => {
    return arr.map((word) => word.concat(str));
  };
  

//console.log(wordConverter_2(adjectives, "er"));// [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
  
const wordConverter_3 = (arr, str) => {
    let word = [];
    arr.filter((w) => word.push(`${w}${str}`));
    return word;
};

//console.log(wordConverter_3(adjectives, "er"));// [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
//-------------------------------------//
/**
7. Hour Calculation
Create a function calculateHours

It should expect an array of objects as an argument (see example below)

it should calculate how many hours (total) this person worked in the week based on items in the given array

Note: Assume, that start is always morning time, end is always afternoon. (No overnight shifts to be expected)

Example array of Working Hours

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];
Call your function and print the return value to the console.

Expected Output

> console.log(calculateHours(hourTracking));
36

 */

const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];

function calculateHours(hours) {
    const workingHours = hours.reduce((total, hours) => {
        return total += (hours.end - hours.start);
    }, 0);
    return workingHours;
}

//console.log(calculateHours(hourTracking)); // 36

const calculateHours_1 = (arr) => {
    return arr.reduce((sum, obj) => {
      return sum += obj.end - obj.start
    }, 0);
  };
//console.log(calculateHours_1(hourTracking)); // 36


function calculateHours_2(arr) {
    const sumAll = hourTracking
        .map(item => item.end - item.start)
        .reduce((prev, curr) => prev + curr, 0);
    return sumAll
};

console.log(calculateHours_2(hourTracking)); // 36


//-------------------------------------//
/**
8.  Classes
Create a blueprint for a course at DCI - using the class syntax in javascript.

Write a class named Course

Add a constructor to initialize the properties in the given order.

Class' properties:

the teacher as a string,
the type of course, whether the group is learning "marketing" or "web development"
the number of students taking the course.
Class' methods:

spaceNeeded that calculates how big a classroom should be depending on the number of students taking the course: 1 student = 2m².
E.g. If a course has 10 students, then return: "The classroom should be 20m²."

details to return all the information of the course: "This is a web development course taught by John Smith. There are 10 students taking the course."
fill in the teacher, type and number from your class' properties.
Note: Please use the exact phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc.
Create an instance of your class, and call your methods. Printing their result values to the console.

Example (for an instance with teacher John, type web development and a number of 22 students)

> console.log(course.spaceNeeded());
The classroom should be 44m².

> console.log(course.details());
This is a web development course taught by John. There are 22 students taking the course.

 */

class Course {
    constructor(teacher, type, number) {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded() {
        //let result = this.number * 2;
        return `The classroom should be ${this.number * 2}m².`;
    }
    details() {
        return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
    }
}

let course = new Course("John", "web development", 22);
console.log(course.spaceNeeded());
console.log(course.details());
//-------------------------------------//

/**

9. Format your string
Write function capitalizeFirstLetter

It should accepts a string as an argument.

If the argument is no string (e.g. 123 or true) convert it to a string first.

The function should convert the first character of each word to uppercase.

Example the quick brown fox → The Quick Brown Fox.

return the changed string.

Call your function and print the return value to the console.

Example call

> console.log(capitalizeFirstLetter("hey there")); 
Hey There

> console.log(capitalizeFirstLetter(true));
True
 */
function capitalizeFirstLetter(input) {
    input = input.toString()
    let strToArray = input.split(" ");
    return strToArray
      .map((word) => {
        // return word[0].toUpperCase() + word.slice(1);
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
}

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));


const capitalizeFirstLetter_1 = (str) =>
    str.toString().split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");
  

 const capitalizeFirstLetter_2 = (str) => {
     if (typeof str !== 'string') {
         str = str.toString()
     }
    return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1, item.length)).join(' ')
 };
    
console.log(capitalizeFirstLetter_2("hey there"));
console.log(capitalizeFirstLetter_2(true));
//-------------------------------------//
/**
10. Validation
A PIN is a Personal Identification Number (as you are used with bank cards and unlocking your mobile phone)

Create the function validPin

Note: by convention new words in function names (also acronyms) begin with uppercase letters, but continue with lowercase. Write the function as given.
Look at the unit tests (see file testing/test.js search the comment PIN check) for validating a pin.

The function should fulfill the requirements of the unit tests.

Requirements:

The pin code must consist of only numerical digits.
The pin code must be 4 digits long.
The pin should have at least two different digits.
The pin code's last digit should be even (0, 2, 4, 6, 8).
The sum of the pin codes digits should add up to at least 5.
The function should print true if the pin meets all the requirements and false if it does not.

Call your function with some examples, and print the return values to the console.

Examples

> console.log(validPin("1234"));
true
> console.log(validPin("1235"));// last number should be even
false 
> console.log(validPin("wwww"));// should only consist of numbers
false 
> console.log(validPin("12345"));// should be 4 digits, not 5
false 
> console.log(validPin("2222"));// not at least 2 different digits
false 
> console.log(validPin("1000"));// sum of digits is less 5
false 
> console.log(validPin("2224"));
true 
 */

function validPin(pinCode) {
    const number = Number(pinCode);
    //checks if pin is not a number
    if (isNaN(number)) {
        return false;
    }
    
    const pinSplit = pinCode.split("");
    const lengthOfPin = 4;
    //checks pin length
    if (pinSplit.length !== lengthOfPin) {
        return false;
    }
    //checks if last value is odd or even
    if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
        return false;
    }

    let result = 0;
    let checkIdenticalNumbers = [];
    for (let i = 0; i < pinSplit.length; i++) {
       
        result += parseInt(pinSplit[i]); // total of the numbers
        if (!checkIdenticalNumbers.includes(pinSplit[i])) {
            // add not dentical elements to checkIdenticalNumbers
            checkIdenticalNumbers.push(pinSplit[i]);
        }
    }
    //checks if all numbers are identical (at least we should have 2 elements in checkIdenticalNumbers array)
    if (checkIdenticalNumbers.length < 2) {
       return false;
    }
    //checks if total value of pin is less than 5
    if (result < 5) {
        return false
    }
    return true;
}
console.log(validPin("1100"));//false => sum of digits is less 5
console.log(validPin("1234")); // true
console.log(validPin("1235"));//false =>  last number should be even
console.log(validPin("wwww"));//false =>  should only consist of numbers
console.log(validPin("12345"));//false =>  should be 4 digits, not 5
console.log(validPin("2222"));// false => not at least 2 different digits
console.log(validPin("1000"));//false =>  sum of digits is less 5
console.log(validPin("2224")); // true