// for( let i = 0; i < 10 ; i++){
//     if(i === 5){
        
//     }
//     console.log(i);
// }

// while loop 
// let num = 0;
// while(num < 10){
//     console.log("num value is: ",num);
//     num ++;
// }

const cars = ["Ford","BMW","KIA","Honda"];

// let i = 0;
// while(i < cars.length){
//     console.log(cars[i]);
//     i++;
// }


// let randomResult = 0;
// let loopCount = 0;

// while (randomResult !== 8) {
//   randomResult = Math.floor(Math.random() * (10 ) + 1);
//   loopCount++;
// }

// console.log(`The random result: ${randomResult}`);
// console.log(`The number of loops: ${loopCount}`);


// do while loop 
// let counter = 0;
// do {
//  console.log("counter value : ",counter);
//  counter++;
// }
// while(counter < 10)

// nested for loop
for(let i =0;i < 10 ;i++){
   // console.log("#");
   process.stdout.write("\n")
   
    for(let x =0; x < 10; x++){
        //console.log(x);
        if( x ==1 || x == 9  ){
            process.stdout.write(" ")
        }
        process.stdout.write(" *")
       
    }
}