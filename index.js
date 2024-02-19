const firstName = document.querySelector("#first_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const firstNameValidation = document.querySelector("#first_name~.validate");
const emailValidation = document.querySelector("#email~.validate");
const passwordValidation = document.querySelector("#password~.validate");

const formSubmit = document.querySelector("button.sign-up");

const isValidFirstName = () => {
    if (!firstName.value) {
        firstNameValidation.textContent = "First name is required";
        return false;
    }
    return true;
};

const isValidEmail = () => {
    const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.value.match(regexp)) {
        emailValidation.textContent = "Please specify a valid email address";
        return false;
    }
    return true;
};

const isValidPwdLength = () => {
    console.log(password.value);
    regexp = /(?=.{8,})/g;
    if (password.value.match(regexp)) {
        return true;
    }
    passwordValidation.textContent = "really?";
    return false;
};

const isPasswordMatch = () => {
    if (password.value !== confirmPassword.value) {
        passwordValidation.textContent = "Passwords do not match";
        return false;
    }
    return true;
};

formSubmit.addEventListener("click", (event) => {
    if (
        !isValidFirstName() ||
        !isValidEmail() ||
        !isValidPwdLength() ||
        !isPasswordMatch()
    ) {
        event.preventDefault();
    }
});
