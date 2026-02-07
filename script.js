let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let input = document.querySelector("input");
    console.log(input.innerText);
});
