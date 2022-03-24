// * ES6 CLASS INTRODUCTION

// The concept of "class" in JavaScript was introduced in ES6.
// Internally, a class is a "wrapper" over the normal way JavaScript works.

// A class still gives you an efficient way of creating "types" of object, and "giving" them default properties and methods.

// Class syntax is more comparable to similar features available in C#, Java etc.

//---------------//
// Passing params to functions in (param1, param2,...)
/*function personFn(name, email) {
    console.log(name)
    console.log(email)
}
personFn('Pilar', 'pilar@gmail.com')*/

//-------------//
// let email (3)

class Person{
    constructor(personName, personEmail) {
        this.name = personName;
        this.email = personEmail
    }
    greeting() {
        return `Hallo ${this.name}`
    }
    test(email) {
       // test(email) (2)
       // let email (1)
        console.log(email)
    }
}

let personInit_1 = new Person('Pilar', 'pilar@gmail.com')
// props
console.log(personInit_1.name) // Pilar
console.log(personInit_1.email) // pilar@gmail.com
// method
console.log(personInit_1.greeting()) // Hallo Pilar!

// console.log(personInit_1.test()) // email is not defined

// console.log( Person('Pilar', 'pilar@gmail.com')) // TypeError: Class constructor Person cannot be invoked without 'new'
//------------
let personInit_2 = new Person('Max', 'max@gmail.com')
// props
console.log(personInit_2.name) // Max
console.log(personInit_2.email) // max@gmail.com
// method
console.log(personInit_2.greeting()) // Hallo Max
//--------

console.log(new Person('Pilar', 'pilar@gmail.com')) // Person { name: 'Pilar', email: 'pilar@gmail.com' }

// We use a class to INSTANTIATE an INSTANCE of the class.
// Or, "create an object of the type of the class"

// The constructor() method is called automatically by the "new" operator, which lets us initialize the new object.
// The constructor() is a "special" method which JS automatically calls when we create a new INSTANCE of the class.
// The constructor() can accept arguments like a normal method, and use those arguments to initialize objects.

// When new Person("Pilar", 'pilar@gmail.com') is called...
//  A new object is created;