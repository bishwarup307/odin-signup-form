const firstName = document.querySelector("#first_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const pwdValidationBlock = document.querySelector(".password-validation");

const firstNameValidation = document.querySelector("#first_name~.validate");
const emailValidation = document.querySelector("#email~.validate");
const passwordValidation = document.querySelector("#password~.validate");

const pwdLength = document.querySelector("#pwd-len");
const pwdUpperCase = document.querySelector("#pwd-upper-case");
const pwdLowerCase = document.querySelector("#pwd-lower-case");
const pwdNumber = document.querySelector("#pwd-number");
const pwdSpecialChar = document.querySelector("#pwd-special-char");
const pwdStartsWith = document.querySelector("#pwd-startswith");
const pwdAllValid = document.querySelector("#pwd-allvalid");

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

const isValidLength = () => {
    const regexp = /(?=.{8,20})/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const hasNumber = () => {
    const regexp = /(?=.*\d)/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const hasUpperCase = () => {
    const regexp = /(?=.*[A-Z])/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const hasLowerCase = () => {
    const regexp = /(?=.*[a-z])/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const hasSpecialCharacter = () => {
    const regexp = /(?=.*[$@!#^&.-_*])/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const startsWithLetter = () => {
    const regexp = /(?=^[\w])/g;
    if (password.value.match(regexp)) return true;
    return false;
};

const containsValidChars = () => {
    const regexp = /[A-Za-z0-9$@!#^&.-_*]+$/g;
    if (password.value.match(regexp)) return true;
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

password.addEventListener("focus", () => {
    pwdValidationBlock.style.transform = "scale(1)";
});

password.addEventListener("blur", () => {
    pwdValidationBlock.style.transform = "scale(0)";
});

password.addEventListener("input", () => {
    if (isValidLength()) pwdLength.classList.add("valid");
    else pwdLength.classList.remove("valid");

    if (hasLowerCase()) pwdLowerCase.classList.add("valid");
    else pwdLowerCase.classList.remove("valid");

    if (hasUpperCase()) pwdUpperCase.classList.add("valid");
    else pwdUpperCase.classList.remove("valid");

    if (hasSpecialCharacter()) pwdSpecialChar.classList.add("valid");
    else pwdSpecialChar.classList.remove("valid");

    if (hasNumber()) pwdNumber.classList.add("valid");
    else pwdNumber.classList.remove("valid");

    if (startsWithLetter()) pwdStartsWith.classList.add("valid");
    else pwdStartsWith.classList.remove("valid");

    if (containsValidChars()) pwdAllValid.classList.add("valid");
    else pwdAllValid.classList.remove("valid");
});
