// Destructuring Assignment
// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key, and arrays allow us to gather data items into an ordered collection.


// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.


//1- Array destructuring

// How the array is destructured into variables:

/*
let arrayOfNames = ['Pilar', 'Byron', 'Diala']

// not very professional 
let name_1 = arrayOfNames[0]
let name_2 = arrayOfNames[1]
let name_3 = arrayOfNames[2]

console.log('name_1 ==> ', name_1) //name_1 ==>  Pilar
console.log('name_2 ==> ', name_2) // name_2 ==>  Byron
console.log('name_3 ==> ', name_3) // name_3 ==>  Diala
*/

// With Array destructuring follow the indexes order

let [item_1, item_2, item_3] = ['Pilar', 'Byron', 'Diala']


console.log('item_1 ==> ', item_1) // item_1 ==>  Pilar
console.log('item_2 ==> ', item_2) // item_2 ==>  Byron
console.log('item_3 ==> ', item_3) // item_3 ==>  Diala


// With ... dots we slice the rest of the array
let arr = [22, 5, 7, -2, 44, 100, 0]
let [a, , , d, ...restOfNumbers] = arr

console.log('a ==> ', a) // a ==>  22
console.log('d ==> ', d) // d ==>  -2
console.log('...restOfNumbers ==> ', restOfNumbers) // ...restOfNumbers ==>  [ 44, 100, 0 ]

const blogs = ['Blog 1', 'Blog 2']
const comments = ['comment 1', 'comment 2', 'comment 3']


let [el_1, el_2, el_3, ...restElements] = [...blogs, ...comments]

console.log('el_1 ==> ', el_1) // el_1 ==>  Blog 1
console.log('el_2 ==> ', el_2) // el_2 ==>  Blog 2
console.log('el_3 ==> ', el_3) // el_3 ==>  comment 1
console.log('restElements ==> ', restElements) // restElements ==>  [ 'comment 2', 'comment 3' ]

//-----------#######--------

//2- Object destructuring follow the key name in the object (we do not have indexes in object)
// In object the order is not important

let person = {
    name: 'Elena',
    email: 'elena@gmail.com',
    tel: 1234567,
    city: 'Berlin'
}

let { name, tel, email } = person

console.log('name ==> ', name) // name ==>  Elena
console.log('email ==> ', email) // email ==>  elena@gmail.com
console.log('tel ==> ', tel) // tel ==>  1234567

let user = {
    id: 1234,
    userName: 'Fidan',
    email: 'fidan@gmail.com',
    password: '676767',
    email:['test_3@gmail.com', 'test_4@gmail.com']
}

let address = {
    str: 'Berliner str 1',
    city: 'Berlin',
    zip: 12345,
    userEmail_1: 'test@gmail.com',
}

const { city, userEmail = email ,userEmail_1 } = { ...user, ...address }

console.log('city ==> ', city) // city ==>  Berlin
console.log('userEmail ==> ', userEmail) // userEmail ==>  fidan@gmail.com
console.log('userEmail_1 ==> ', userEmail_1) // userEmail_1 ==>  test@gmail.com

//--------######---------
//3- Function destructuring


function createBlog_1(views, title, likes, comments, image) {
    return `
    title: ${title}
    image: ${image}
    likes: ${likes}
    comments: ${comments}
    views: ${views}
    `
}
console.log(createBlog_1('Javascript', 20, 2, 5, 'js.png'))
/**
    title: Javascript
    image: js.png
    likes: 2
    comments: 5
    views: 20
 */

// with destructuring
function createBlog_2({views, title, comments, image,likes}) {
        return `
        title: ${title}
        image: ${image}
        likes: ${likes}
        comments: ${comments}
        views: ${views}
        `
}

console.log(createBlog_2({title:'Javascript', image:'js.jpg', views:30, comments:5, likes:10}))

/**
  title: Javascript
        image: js.jpg
        likes: 10
        comments: 5
        views: 30
 */











