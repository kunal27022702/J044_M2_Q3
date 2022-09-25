// Getting the container for the number
let numberdiv = document.getElementById("number");

// Value of the number
let number = 0;

// Accessing buttons using IDs
let plus = document.getElementById("incr-buttn");
let minus = document.getElementById("decr-buttn");

// Adding actions to do if button is clicked
plus.addEventListener("click", () => {
    ++number;
    numberdiv.innerHTML = number;
})

minus.addEventListener("click", () => {
    if (number > 0){
        --number;
        numberdiv.innerHTML = number;
    }
    else {
        numberdiv.innerHTML = 0;
    }
})