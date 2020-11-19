const signInBtn = document.querySelector("#signInBtn");
const signupBtn = document.querySelector("#signupBtn");
const container = document.querySelector(".container");

signupBtn.addEventListener('click', () => {
    container.classList.add("signupMode");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("signupMode");
});