// clone VS reference
// Spread Operator ...
// Very easy to copy the primitive data (strings, numbers, ...)
// BUT
// To copy non-primitive(arrays, objects, ...) we need an extra step (clone)

/**
 Primitives
- If a primitive type is assigned to a variable,
 we can think of that variable as containing the primitive value.

- When we assign these variables to other variables using =,
 we copy the value to the new variable. They are copied by value.

- Changing one does not change the other.
 Think of the variables as having no relationship to each other.
 */

let user = 'Alex' // 
 
let person = user

console.log('user ==> ', user) // user ==>  Alex

// Change user
user = 'Pilar'

console.log('user ==> ', user) // user ==>  Pilar
console.log('person ==> ', person) // person ==>  Alex

//---------------#################------------

/**
 * NON-Primitives
  Reference ==> data type Objects And Arrays

  - Variables that are assigned a non-primitive value are given a reference to that 
  value. That reference points to the object’s location in memory.
   The variables don’t actually contain the value.
*/

// Array example:
// x is reference to [1, 2, 4]
let x = [1, 2, 4]

// y is reference to x | NOT COPY
let y = x

console.log('x => ', x) // [ 1, 2, 4 ]
console.log('y => ', y) // [ 1, 2, 4 ]


// push new item to x array but y also changed!
x.push('New element to x array')

console.log('x => ', x) // x =>  [ 1, 2, 4, 'New element to x array' ]
console.log('y => ', y) // y =>  [ 1, 2, 4, 'New element to x array' ]

//----------###------------

// Object example:

let person_1 = {
  name: 'Jon',
  age: 35
}

let person_2 = person_1

console.log('person_1 ==> ', person_1) // person_1 ==>  { name: 'Jon', age: 35 }
console.log('person_2 ==> ', person_2) // person_2 ==>  { name: 'Jon', age: 35 }

person_2.age = 55

console.log('person_1 ==> ', person_1) // person_1 ==>  { name: 'Jon', age: 55 }
console.log('person_2 ==> ', person_2) // person_2 ==>  { name: 'Jon', age: 55 }

let person_3 = 'We can copy this'
let person_4 = person_3 

console.log('person_3 ==> ', person_3) // person_3 ==>  We can copy this
console.log('person_4 ==> ', person_4) // person_4 ==>  We can copy this

person_4 = 'person_4 changed!'

console.log('person_3 ==> ', person_3) // person_3 ==>  We can copy this
console.log('person_4 ==> ', person_4) // person_4 ==>  person_4 changed!
//----------------#######--------------------------

/**
  Clone is copy the original element and make an independent new element.

  - We can clone with Spread Operator (...)  It’s work with objects and Arrays.

     - ES6 provides a new operator called spread operator, of three dots (...).
     The spread operator allows you to spread
     out elements of array or object.

 */

// Array
let odd = [1, 2, 3]  
// ...odd ==>  1, 2, 3
// [...odd] ==>  [1, 2, 3]

// clone odd array
let arrayOfNumbers = [...odd] // 1, 2, 3

// Object

let car = {
  name: 'BMW',
  year:2010
}
// ...car ==> name:'BMW', year: 2010
// {...car} ==> { name:'BMW', year: 2010 }

// clone car object
let cloneCar = { ...car }
//-------####----------
//Clone Object
let userObject = {
  name: 'Tommy',
  age: 44
}

console.log('userObject ==> ',userObject) // userObject ==>  { name: 'Tommy', age: 44 }

// clone userObject 

// userObject.test = 'test'
let cloneUser = { ...userObject }

console.log('cloneUser ==> ', cloneUser) // cloneUser ==>  { name: 'Tommy', age: 44 }

userObject.email = 'tommy@gmail.com'

console.log('userObject ==> ',userObject) // userObject ==>  { name: 'Tommy', age: 44, email: 'tommy@gmail.com' }
console.log('cloneUser ==> ', cloneUser) // cloneUser ==>  { name: 'Tommy', age: 44 }
//------#####--------
// Clone Array

let blogs = ['Blog 1', 'Blog 2']

let cloneBlogs = [...blogs]

console.log('blogs ==> ', blogs) // blogs ==>  [ 'Blog 1', 'Blog 2' ]
console.log('cloneBlogs ==> ', cloneBlogs) // cloneBlogs ==>  [ 'Blog 1', 'Blog 2' ]

cloneBlogs.push('New blog in clone blogs')

console.log('blogs ==> ', blogs) // blogs ==>  [ 'Blog 1', 'Blog 2' ]
console.log('cloneBlogs ==> ', cloneBlogs) //  cloneBlogs ==>  [ 'Blog 1', 'Blog 2', 'New blog in clone blogs' ]


//------#####--------

let posts = [{ title: 'blog 1' }, { title: 'blog 2' }]

// Not deep clone
let clonePosts = [...posts]

console.log('posts ==> ', posts) // posts ==>  [ { title: 'blog 1' }, { title: 'blog 2' } ]
console.log('clonePosts ==> ',clonePosts) //clonePosts ==>  [ { title: 'blog 1' }, { title: 'blog 2' } ]

clonePosts[0].image = 'blog_1.png'
console.log('posts ==> ', posts) // posts ==>  [ { title: 'blog 1', image: 'blog_1.png' }, { title: 'blog 2' } ]
console.log('clonePosts ==> ', clonePosts) //clonePosts ==>  [ { title: 'blog 1', image: 'blog_1.png' }, { title: 'blog 2' } ] 

function structuredClone(data) {
  // Deep clone
  return JSON.parse(JSON.stringify(data))
}

let realClone = structuredClone(posts)

console.log(realClone) // [ { title: 'blog 1', image: 'blog_1.png' }, { title: 'blog 2' } ]
