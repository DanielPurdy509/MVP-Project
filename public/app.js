// const app = express();
// app.use(express.static("public"));

// let container = document.querySelector("#card_front");

// fetch("/api/test")
// .then(function (response) {
//     return response.json();
// })
// .then(function (users) {
//     console.log(users);
//     users.forEach(function (users) {
//         console.log("Adding h2 for person:", users);
//         container.innerHTML += `<h2>${users.name}</h2>`;
//     });
// });

// Variables and Event Listeners for From Visiblity --------------------------------
const addCardButton = document.querySelector("#add_new_button");
const newCardForm = document.querySelector("#new_card_form");
const loginForm = document.querySelector("#login_form");
const login_button = document.querySelector("#login_button");
const signup_button = document.querySelector("#signup_button");

addCardButton.addEventListener("click",function() {
    if(newCardForm.style.visibility === "visible") {
        newCardForm.style.visibility = "hidden";
      }else {
        newCardForm.style.visibility = "visible";
    }
})

login_button.addEventListener("click",function() {
    if(loginForm.style.visibility === "visible") {
        loginForm.style.visibility = "hidden";
      }else {
        loginForm.style.visibility = "visible";
    }
})

signup_button.addEventListener("click",function() {
    if(loginForm.style.visibility === "visible") {
        loginForm.style.visibility = "hidden";
      }else {
        loginForm.style.visibility = "visible";
    }
})