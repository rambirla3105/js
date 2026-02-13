/*function firstStep (){
  return new Promise((resolve) => {
    console.log("First Step Done");
    return resolve(50);
  });
}

function secondStep(number){
  return new Promise((resolve) => {
    console.log("second step done");
   return resolve(number * 2);
  });
}

function thirdStep(number){
  return new Promise((resolve) =>{
    console.log("third step done");
   return resolve(number + 10);
  })
}

firstStep()
 .then((result) => {
  return secondStep(result);
})

  .then((result) => {
    return thirdStep(result);
  })

  
  .then( (finalstep) => {
    console.log("Your final number is: ", finalstep);
  });
*/


// let h1 = document.querySelector("h1");

// function colorChange(color, delay){
//   return new Promise((resolve) => {
//     setTimeout(()=>{
//       h1.style.color = color;
//     } , delay);
//   });
// }

// colorChange("red", 1000)
//   .then(() =>{
//     console.log("color changed");
//     return colorChange("blue", 1000);
//   })

//   .then(() => {
//     console.log("colorChanged");
 
//   })

// PROMISES OVER

//ASYNC FUNCTIONS::

// async function greet(){
//   return "Hello";
// }

// greet()
// .then((result) => {
//   console.log("greet:", result);
// })

// Await Key word

// function getNum (){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random()*10) +1;
//       console.log(num);
//       resolve();
//     }, 1000);

    
//   })
// }

// async function demo(){
//   for(let i=1; i<=10; i++){
//     await getNum();
//   }
// }

//handeling rejections

// function getNum (){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random()*10) +1;
//       if(num == 3){
//         reject(new Error("error found"));
//         return;
//       }else{
//         console.log(num);

//       resolve();
//       }
//     }, 1000);

    
//   })
// }

// async function demo(){
//   try{
//     for(let i=1; i<=10; i++){
//     await getNum();
//   }
// }catch(err){
//   console.log(err.message);
// }

// let a = 5;
// console.log(`your numer is ${a}`);
// }


// JSON

let jsonData = '{"fact":"A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.","length":116}';
let validRes = JSON.parse(jsonData);
console.log(validRes.fact);

//api testing