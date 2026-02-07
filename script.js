let p = document.querySelector("p");
let input = document.querySelector("input");
let button = document.querySelector("button");

input.addEventListener("input", function(){
  console.log(input.value);
  p.innerText = input.value;
});