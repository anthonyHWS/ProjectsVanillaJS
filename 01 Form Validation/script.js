// Create variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Show input error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};


// Show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
};


// Email validation
const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email.trim().toLowerCase());
};



// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // username
    if (username.value == false){
        showError(username, "username is required")
    } else {
        showSuccess(username)
    };

    // email
    if (email.value == false){
        showError(email, "Email is required")
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid")
    } else {
        showSuccess(email)
    };

    // password
    if (password.value == false){
        showError(password, "password is required")
    } else {
        showSuccess(password)
    };
    // password2
    if (password2.value == false){
        showError(password2, "password is required")
    } else {
        showSuccess(password2)
    };
})


