// Create variables

// Username
const userInput = document.getElementById("userInput");
const userSmall = document.getElementById("userSmall");

// Email
const emailInput = document.getElementById("emailInput");
const emailSmall = document.getElementById("emailSmall");

// Password
const passwordInput = document.getElementById("passwordInput");
const passwordSmall = document.getElementById("passwordSmall");

// Password Confirm
const password2Input = document.getElementById("password2Input");
const password2Small = document.getElementById("password2Small");

// Button
const submit = document.getElementById("submit");

function checkUser(){
    if (userInput.value.length < 6){
        userInput.classList.remove("valid")
        userInput.classList.add("error");
        userSmall.classList.add("error");
        userSmall.style.display = "block";
    } else {
        userInput.classList.remove("error");
        userInput.classList.add("valid");
    }
};

function checkEmail(){
    if (emailInput.value.includes("@") !== true){
        emailInput.classList.add("error");
        emailSmall.classList.add("error");
        emailSmall.style.display = "block";
    } else {
        emailInput.classList.add("valid");
    };
};

function checkPassword(){
    if (passwordInput.value.length < 6){
        passwordInput.classList.add("error");
        passwordSmall.classList.add("error");
        passwordSmall.style.display = "block";
    } else {
        passwordInput.classList.add("valid");
    }
};

function checkPassword2(){
    if (password2Input.value !== passwordInput.value || password2Input.value.length < 6){
        password2Input.classList.add("error");
        password2Small.classList.add("error");
        password2Small.style.display = "block";
    } else {
        password2Input.classList.add("valid");
    }
};

submit.addEventListener("click", (event) =>  {
    event.preventDefault();
    checkUser();
    checkEmail();
    checkPassword();
    checkPassword2();
});