let button = document.getElementById("button");
let currentDate = document.getElementById("time");
let newItem = document.getElementById("newItem")
let todoDiv = document.getElementById("box")


let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date().toLocaleDateString("en-US", options);
currentDate.innerHTML = today
button.addEventListener("click", () => {
    if (newItem === "") {
        alert("Kindly type in an item")
    } else {
        const todoItem = document.createElement("p");
        todoItem.classList.add("item")
        todoDiv.appendChild(todoItem)
        todoItem.innerHTML = newItem.value;

    }


})