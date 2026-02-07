let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");


    ul.appendChild(item);
    ul.appendChild(del);
    input.value = "";
});
