const addCardButton = document.querySelector("#add_new_button");
const newCardForm = document.querySelector("#new_card_form");

addCardButton.addEventListener("click",function() {
    newCardForm.classList.toggle("visible");
})

const loginForm = document.querySelector("#login_form")
const login_button = document.querySelector("#login_button")

login_button.addEventListener("click",function () {
    login_button.classList.toggle("visible");
})