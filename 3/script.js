"use strict"

let toDoForm = document.getElementById("toDoForm")
let priorityButtons = document.querySelectorAll('input[name="prioSelect"]')

function addToTheList() {
    let textInputValue = document.getElementById("textInput").value

    for (let choice of priorityButtons) {
        if (choice.checked) {
            console.log(choice)
        }
    }

    // localStorage.setItem("toDoList", textInputValue)
}

toDoForm.querySelector("button").addEventListener("click", event => {
    event.preventDefault()

    addToTheList()
})