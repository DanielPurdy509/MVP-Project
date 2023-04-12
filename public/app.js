let addCardButton = document.querySelector("add_card_button");
let newCardForm = document.querySelector("new_card_form");

addCardButton.addEventListener("click", () => {
    newCardForm.style.visibility = "visible";
})