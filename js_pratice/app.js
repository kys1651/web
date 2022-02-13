const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function LoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value; 
    loginForm.classList.add("hidden");
    localStorage.setItem("username",username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove("hidden");
    greeting.innerText = "Hello! " + username;
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",LoginSubmit);
}else {
    paintGreeting(savedUsername);
}