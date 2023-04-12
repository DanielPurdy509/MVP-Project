const app = express();
app.use(express.static("public"));

let container = document.querySelector("#card_front");

fetch("/api/test")
.then(function (response) {
    return response.json();
})
.then(function (users) {
    console.log(users);
    users.forEach(function (users) {
        console.log("Adding h2 for person:", users);
        container.innerHTML += `<h2>${users.name}</h2>`;
    });
});

// const addCardButton = document.querySelector("#add_new_button");
// const newCardForm = document.querySelector("#new_card_form");

// addCardButton.addEventListener("click",function() {
//     newCardForm.classList.toggle("visible");
// })

// const loginForm = document.querySelector("#login_form")
// const login_button = document.querySelector("#login_button")

// login_button.addEventListener("click",function () {
//     login_button.classList.toggle("visible");
// })