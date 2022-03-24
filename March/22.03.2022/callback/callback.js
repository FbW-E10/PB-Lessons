function getLanguage(callback){
  console.log('greeting language');
  const language = "German";
  callback(language) 
}


function greeter(lang){
    if(lang === "English"){
        console.log('Hello');

    }
    else if(lang === "German"){
        console.log('Hallo!');
    }
 
}

//getLanguage(greeter);


const numbers = [1,2,3,4,5,6];
// get all numbers > 4 

// let result = numbers.filter(item =>{
//     return item > 4
//      });

function filterArr(item){
    return item > 4
}

let result = numbers.filter(filterArr);


//console.log(result);

// ########################################
// function first(){
//     setTimeout( function(){
//         console.log(1)
//     } , 1000)

// }
// function second(){
//   console.log(2)
// }
// first();
// second();

function first(callback){
    setTimeout( function(){
        console.log(1)
        callback()
    } , 1000)
   

}
function second(){
  console.log(2)
}
//first(second);

// 

function getData(callback){
setTimeout(function(){
    console.log(' getting images from the server');
    callback()
   console.log(' we are done!!!');
},500)
}

function renderData(){
  console.log(' rendering images to browser');
}
getData(renderData);
//renderData()