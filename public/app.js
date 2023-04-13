
    fetch('/api/cards')
    .then(response => {
        console.log(response);
    })

// Flash Card Functionality --------------------------------------------------------

const cards = [
    {subject:"HTML",definition:"Hypertext Markup Language"},
    {subject:"CSS",definition:"Cascading Style Sheets"},
    {subject:"JS",definition:"JavaScript"}
];
const frontCard = document.querySelector("#card_subject");
const backCard = document.querySelector("#card_definition");

var currentIndex = 0;
function setCard (currentIndex,cards) {
    frontCard.innerHTML = cards[currentIndex].subject;
    backCard.innerHTML = cards[currentIndex].definition;
};
setCard(currentIndex,cards);

// Previous and Next Buttons

const nextButton = document.querySelector("#next_button");
const previousButton = document.querySelector("#previous_button")

nextButton.addEventListener("click",function(currentIndex,cards,frontCard,backCard) {
    currentIndex ++;
    frontCard.innerHTML = cards[currentIndex].subject;
    backCard.innerHTML = cards[currentIndex].definition;
})

if(currentIndex == 0){
    previousButton.style.visibility = "hidden";
} else {
    previousButton.style.visibility = "visible";
}



// Variables and Event Listeners for Form Visiblity --------------------------------
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
// Login and Sign-up Forms ----------------------------------------------------------

const password_field = document.querySelector("#password");
const username_field = document.querySelector("#username");
const loginSubmit = document.querySelector("#login_submit");

loginSubmit.addEventListener("click", event => {
    event.preventDefault();
    let password = JSON.stringify(password_field.value);
    let username = JSON.stringify(username_field.value);

    console.log(password);
    console.log(username);
    loginForm.style.visibility = "hidden";
    // fetch(`api/login?param1=${username}&param2=${password}`)
        // method: "GET",
        // headers: {
        //    "Content-Type":"application/json"
        // },
        // body: JSON.stringify(
        //     username,
        //     password
        // )
    //     .then(response => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         // return response.json();
    //       })
    //       .then(data => {
    //         console.log(data);
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);
    //       });
    // })
})
