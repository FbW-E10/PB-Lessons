//1- Array to Object
// Create a function named arrayToObject take an array as an argument and return object.
/**
  arrayToObject([['firstName', 'John'], ['lastName', 'Do'], ['age', 31]]) ==> {firstName:'John',lastName:'Do', age:31}
 */


  

//-----------------//

//2- Object to Array
// Create a function named objectToArray take an object as an argument and return array.
/**
  objectToArray({name:'Alex', age: 29}) ==> [['name', 'Alex'],  ['age', 29]]
 */





//---------------//
//3- Create a function named addWord take an array of names as first argument and a string (Hello) as second argument.
/**
 let names = ['John', 'Bob'];
 Look at the expected output:

 addWord(names,'Hello') ==> ['Hello John', ' Hello Bob']

 */





//---------------//

  //4-  Create a function named grid take a number grids as first argument and a string char as second argument.

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






//---------------//
 //5- Create a function named freelanceInvoice takes an object (hourAndDays) as the first argument and cost per hour as the second argument.
 /*
 Look at the expected output:
 const hourAndDays = [
    { day: 'Monday', start: 8, end: 15},
    { day: 'Wednesday', start: 9, end: 17},
    { day: 'Friday', start: 7, end: 12},
];

freelanceInvoice(hourAndDays , 20) ==> 400 Euro

 */




//---------------//
//6- Classes
/**
 Create class named Shop.
    Add a constructor to initialize the properties in the given order.

    Class' properties:

    the name as a string (name of the shop),
    the area as a number (the area of the shop)
    the space as a number (the space needed `square meter` for each person in the shop)

    Class' methods:
    totalPeopleToGetIn() // How many people should get in the shop

    details() // The shop details


    If name = Netto, area = 200 and space for each person is 5 square meter
    Expected Output:

    shop.totalPeopleToGetIn();
    `We allow 40 people to get in.`

    shop.details();
    `The shop name is Netto. 5 square meter for each person.`

 */




//---------------//
//7- Create a function named capitalize takes a string as the first argument and returns the string by capitalizing the first letters.

// Example: capitalize('hello world') ==> Hello World




//---------------//
/**
 8- Create a function named checkPassword takes a password as an argument and check:

    The password must consist of only numbers.
    The password must be 5 digits long.
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



