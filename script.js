let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    alert("Logged In")
    console.log(`usename ${user.value} password: ${pass.value}`);
});
