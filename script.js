let button = document.querySelector("#changeTextBtn");
let button2 = document.querySelector("#toggleBoxBtn");
let button3 = document.querySelector("#colorBtn");
let h1 = document.querySelector("h1");
let addstd = document.querySelector("#addStudentBtn");
let ul = document.querySelector("ul");

function buttonClick(){
    
    h1.innerText = "kardia click gandu";
};


button.onclick = buttonClick;

button2.addEventListener("click", function(){
    h1.innerText = "heheheeee";
});

button3.onclick = function(){
    h1.innerText = "bas karle ganidye";
};

addstd.onclick = function(){
    let li = document.createElement('li');
    li.innerText = prompt("Naam daalbe");  
    ul.appendChild(li);
    
};