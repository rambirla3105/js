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

async function greet(){
  return "Hello";
}

greet()
.then((result) => {
  console.log("greet:", result);
})