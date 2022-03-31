//##### Transform data ######

//1- Create a function named arrayToObject takes an array as an argument and return object.
/**
  arrayToObject([['firstName', 'John'], ['lastName', 'Do'], ['age', 31]]) ==> {firstName:'John',lastName:'Do', age:31}
 */

  function arrayToObject(arr) {
   const obj = {};
   arr.forEach((nestedArrItem) => {
     obj[nestedArrItem[0]] = nestedArrItem[1];
   });
   return obj;
 }
 
 console.log(
   arrayToObject([
     ["firstName", "John"],
     ["lastName", "Do"],
     ["age", 31]
   ])
 ); // {firstName:'John',lastName:'Do', age:31}
 
 //-----------------//
 
 //2- Create a function named objectToArray takes an object as an argument and return array.
 /**
   objectToArray({name:'Alex', age: 29}) ==> [['name', 'Alex'],  ['age', 29]]
  */
 
 // first way
 function objectToArray(obj) {
   // obj.entries() ==> not valid
   return Object.entries(obj);
 }
 
 console.log(objectToArray({ name: "Alex", age: 29 })); // [['name', 'Alex'],  ['age', 29]]
 
 // second way
 /*
 const obj = { name: "Alex", age: 29 }
 let key = 'name'
 
 obj[key]
 */
 
 function objectToArray_1(obj) {
   const arr = [];
 
   for (let key in obj) {
     arr.push([key, obj[key]]);
   }
 
   return arr;
 }
 
 console.log(objectToArray_1({ name: "Alex", age: 29 })); // [['name', 'Alex'],  ['age', 29]]
 
 //---------------//
 //3- Create a function named addWord takes an array of names as first argument and a string (Hello) as second argument.
 /**
  let names = ['John', 'Bob'];
  Look at the expected output:
 
  addWord(names,'Hello') ==> ['Hello John', ' Hello Bob']
 
  */
 
 function addWord(arr, word) {
   return arr.map((name) => `${word} ${name}`);
 }
 
 console.log(addWord(["John", "Bob"], "Hello")); // ["Hello John", "Hello Bob"]
 
 //--------------------------------------------------------------------------------//
 //######### Nested for loop ###########
 //4-  Create a function named grid takes a number of grids as first argument and a string char as second argument.
 
 /**
     Look at the expected output:
     grid(5, "#") ==> [
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ]
                     ]
    
    */
 
 function grid(num, char) {
   const output = [];
 
   for (let i = 0; i < num; i++) {
     const nestedArr = [];
     for (let j = 0; j < num; j++) {
       nestedArr.push(char);
     }
     output.push(nestedArr);
   }
   return output;
 }
 
 console.log(grid(5, "#"));
 /**
      [
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ],
                       [ '#', '#', '#', '#', '#' ]
         ]
  */
 
 //----------------------------------------------------------------------------------//
 //######### Arrays & objects ###########
 //5- Create a function named freelanceInvoice takes an array (hourAndDays) as the first argument and cost per hour as the second argument.
 /*
  Look at the expected output:
  const hourAndDays = [
     { day: 'Monday', start: 8, end: 15},
     { day: 'Wednesday', start: 9, end: 17},
     { day: 'Friday', start: 7, end: 12},
 ];
 
 freelanceInvoice(hourAndDays , 20) ==> 400 Euro
 
  */
 // with map
 const hourAndDays = [
   { day: "Monday", start: 8, end: 15 },
   { day: "Wednesday", start: 9, end: 17 },
   { day: "Friday", start: 7, end: 12 }
 ];
 function freelanceInvoice(arr, cost) {
   let totalHours = 0;
   arr.map((obj) => {
     let hoursPerDay = obj.end - obj.start;
     totalHours += hoursPerDay;
   });
 
   return totalHours * cost + " Euro";
 }
 
 console.log(freelanceInvoice(hourAndDays, 20)); // 400 Euro
 
 // With reduce
 function freelanceInvoice_1(arr, cost) {
   let totalHours = arr.reduce((acc, obj) => {
     acc += obj.end - obj.start;
     return acc;
   }, 0);
 
   return totalHours * cost + " Euro";
 }
 
 console.log(freelanceInvoice_1(hourAndDays, 20)); // 400 Euro
 
 //----------------------------------------------------------------------------------//
 //######### Classes ###########
 /**
 6- Create class named Shop.
     Add a constructor to initialize the properties in the given order.
 
     Class' properties:
 
     the name as a string (name of the shop),
     the area as a number (the area of the shop)
     the space as a number (the space needed `square meter` for each person in the shop)
 
     Class' methods:
     totalPeopleToGetIn() // Maximum people should get in the shop
 
     details() // The shop details
 
 
     If name = Netto, area = 200 and space for each person is 5 square meter
 
     Expected Output:
 
     shop.totalPeopleToGetIn();
     `We allow 40 people to get in.`
 
     shop.details();
     `The shop name is Netto. 5 square meter for each person.`
 
  */
 
 class Shop {
   constructor(name, area, space) {
     this.name = name;
     this.area = area;
     this.space = space;
   }
   totalPeopleToGetIn() {
     return `We allow ${this.area / this.space} people to get in.`;
   }
 
   details() {
     return `The shop name is ${this.name}. ${this.space} square meter for each person.`;
   }
 }
 
 const shop = new Shop("Netto", 200, 5);
 
 console.log(shop.totalPeopleToGetIn()); // We allow 40 people to get in.
 console.log(shop.details()); // The shop name is Netto. 5 square meter for each person.
 
 //----------------------------------------------------------------------------------//
 //######## Arrays ################
 
 //7- Create a function named capitalize takes a string as the first argument and returns the string by capitalizing the first letters.
 
 // Example: capitalize('hello world') ==> Hello World
 
 function capitalize(str) {
   let strToArray = str.split(" ");
   return strToArray
     .map((word) => {
       // return word[0].toUpperCase() + word.slice(1);
       return word.charAt(0).toUpperCase() + word.slice(1);
     })
     .join(" ");
 }
 
 console.log(capitalize("hello world")); // Hello World
 
 //-------------------------------------------------------------------------------//
 //########## Problem Solving ############
 /**
  8- Create a function named checkPassword takes a password as an argument and check:
 
     The password must consist of only numbers.
     The password must be 5 digits or long.
     The password should have at least two different numbers.
 
     checkPassword function return true if the password is valid and false if it not valid.
 
     Look at the expected output:
 
     checkPassword('xxxxx')// false
     checkPassword(1234) // false
     checkPassword(123433) // true
     checkPassword(222222) // false
     checkPassword('123456') // true
     checkPassword('1234xx56') // false
  */
 function checkPassword(password) {
   let isValid = true;
   let passwordToString = password.toString();
 
   if (isNaN(password)) {
     isValid = false;
   }
 
   if (passwordToString.length < 5) {
     isValid = false;
   }
 
   let checkIdenticalNumbers = [];
   for (let i = 0; i < passwordToString.length; i++) {
     if (!checkIdenticalNumbers.includes(passwordToString[i])) {
       checkIdenticalNumbers.push(passwordToString[i]);
     }
   }
   //console.log(checkIdenticalNumbers);
 
   if (checkIdenticalNumbers.length < 2) {
     isValid = false;
   }
 
   return isValid;
 }
 
 console.log(checkPassword("xxxxx")); // false
 console.log(checkPassword(1234)); // false
 console.log(checkPassword(123433)); // true
 console.log(checkPassword(222222)); // false
 console.log(checkPassword("123456")); // true
 console.log(checkPassword("1234xx56")); // false
 
 //-------------------------//
 //9- Nested array with map/forEach/reduce
 // Create a function named getOddNumbers takes nested array of numbers as an argument and return array of odd numbers.
 
 const numbers = [
   [1, 2, 3, 4, 5],
   [3, 8, 3, 10, 13],
   [7, 45]
 ];
 
 // output ==> [1, 3, 5, 13, 7, 45]
 
 // A- with forEach
 function getOddNumbers(arr) {
   let output = [];
   arr.forEach((nestedArr) => {
     nestedArr.forEach((num) => {
       if (num % 2 !== 0 && !output.includes(num)) {
         output.push(num);
       }
     });
   });
   return output;
 }
 console.log(getOddNumbers(numbers)); // [1, 3, 5, 13, 7, 45]
 
 // B- with map
 
 function getOddNumbers_1(arr) {
   let output = [];
   arr.map((nestedArr) => {
     nestedArr.map((num) => {
       if (num % 2 !== 0 && !output.includes(num)) {
         output.push(num);
       }
     });
   });
// sort the odd numbers 
return output.sort((a, b) => a - b);
 }
 
 console.log(getOddNumbers_1(numbers)); // [1, 3, 5, 13, 7, 45]
 
 // C- with map and reduce
 
 function getOddNumbers_2(arr) {
   return arr.reduce((output, nestedArr) => {
     nestedArr.map((num) => {
       if (num % 2 !== 0 && !output.includes(num)) {
         output.push(num);
       }
     });
     return output;
   }, []);
 }
 
 console.log(getOddNumbers_2(numbers)); // [1, 3, 5, 13, 7, 45]
 