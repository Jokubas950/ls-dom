"use strict"

let count = 0

let body = document.querySelector("body")

let buttonAdd = document.createElement("button")
buttonAdd.innerText = "Add 1"
body.appendChild(buttonAdd)

let buttonRemove = document.createElement("button")
buttonRemove.innerText = "remove 1"
body.appendChild(buttonRemove)

let counter = document.createElement("p")
counter.innerText = `counter: ${count}`
counter.style = "background-color: aqua"
body.appendChild(counter)

buttonAdd.addEventListener("click", (event => {
    event.preventDefault()
    count += 1
    counter.innerText = `counter: ${count}`
    if (count % 2 === 0) {
        buttonAdd.style = "background-color: red"
    }
    else {
        buttonAdd.style = ""
    }
}))

buttonRemove.addEventListener("click", (event => {
    event.preventDefault()
    count -= 1
    counter.innerText = `counter: ${count}`
    if (count % 2 === 0) {
        buttonRemove.style = "background-color: green"
    }
    else {
        buttonRemove.style = ""
    }
}))