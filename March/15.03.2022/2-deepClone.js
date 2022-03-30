// Deep clone with JSON.parse(JSON.stringify(posts))
let posts = [{ title: 'javascript', image: 'js.png' }, { title: 'PHP', image: 'php.png' }]

// PROBLEM ==> ... not work good with nested data 
let clonePosts = [...posts]

console.log('posts ==> ', posts)
/**
 posts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png' }
]
 */
console.log('clonePosts ==> ', clonePosts)

/**
 clonePosts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png' }
]
 */

clonePosts[1].views = 10

console.log('posts ==> ', posts) 

/**
 posts ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png', views: 10 }
]
 */

// clone the 2nd in the posts array

let cloneElement = { ...posts[1] }
console.log('cloneElement ==> ', cloneElement) // cloneElement ==>  { title: 'PHP', image: 'php.png', views: 10 }
//-----------########------------

let blogs = [{ title: 'javascript', image: 'js.png' }, { title: 'PHP', image: 'php.png' }]

let blogsToJson = JSON.stringify(blogs)

console.log('blogsToJson ==> ',blogsToJson) // [{"title":"javascript","image":"js.png"},{"title":"PHP","image":"php.png"}]
console.log('blogs ==> ', blogs)

// Deep clone with JSON.parse(JSON.stringify(posts))
let cloneBlogs = JSON.parse(blogsToJson)
console.log('cloneBlogs ==> ', cloneBlogs) 

cloneBlogs[1].comments = 5
console.log('cloneBlogs ==> ', cloneBlogs) 
/**
 [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png', comments: 5 }
]
 */

console.log('blogs ==> ', blogs)

/**
 blogs ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png' }
]
 */

// Create a function to add views

function addViews(views, arrayOfData) {

  for (let i = 0; i < arrayOfData.length; i++){
    //  { title: 'javascript', image: 'js.png', views:10 }
    // { title: 'PHP', image: 'php.png', views:10}
    arrayOfData[i].views = views
  }

  
}

addViews(10, blogs)

console.log('blogs ==> ', blogs)
/**
 blogs ==>  [
  { title: 'javascript', image: 'js.png', views: 10 },
  { title: 'PHP', image: 'php.png', views: 10 }
]
 */

console.log('cloneBlogs ==> ', cloneBlogs) 
/**
 cloneBlogs ==>  [
  { title: 'javascript', image: 'js.png' },
  { title: 'PHP', image: 'php.png', comments: 5 }
]
 */

addViews(100, cloneBlogs)

console.log('cloneBlogs ==> ', cloneBlogs) 

/**
 cloneBlogs ==>  [
  { title: 'javascript', image: 'js.png', views: 100 },
  { title: 'PHP', image: 'php.png', comments: 5, views: 100 }
]
 */

