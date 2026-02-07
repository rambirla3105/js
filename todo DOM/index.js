let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("button");


    ul.appendChild(item);
    item.appendChild(del);
    input.value = "";
});

ul.addEventListener("click", function(event){
    let listItem = event.target.parentElement;
    if(event.target.nodeName == "BUTTON"){
        listItem.remove();
    }
});