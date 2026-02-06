let button = document.querySelector("button");

button.addEventListener("click", function(){
   let h1 = document.querySelector("h1");
   h1.innerText = `${generate()}`;
   let div = document.querySelector("div");
   div.style.backgroundColor = generate();
});

function generate(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${blue},${green})`;

    return color;
}