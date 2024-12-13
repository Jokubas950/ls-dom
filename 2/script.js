"use strict"

let orderedListId = 1

let unorderedList = document.createElement("ul")
document.querySelector("body").appendChild(unorderedList)

let unorderedListMaker = document.createElement("input")
unorderedListMaker.type = "number"
unorderedListMaker.placeholder = "unordered lists"
document.querySelector("body").appendChild(unorderedListMaker)

let orderedListMaker = document.createElement("input")
orderedListMaker.type = "number"
orderedListMaker.placeholder = "ordered lists"
document.querySelector("body").appendChild(orderedListMaker)

let button = document.createElement("button")
button.innerText = "generate"
button.style = "background-color: aqua"
document.querySelector("body").appendChild(button)

button.addEventListener("click", event => {
    event.preventDefault
    while (document.querySelector("ul").firstChild) {
        document.querySelector("ul").removeChild(document.querySelector("ul").firstChild)     
    }

    for (let i = 0; i < unorderedListMaker.value; i++) {
        let listItems = document.createElement("li")
        listItems.innerText = "unordered"
        document.querySelector("ul").appendChild(listItems)

        let orderedList = document.createElement("ol")
        orderedList.id = `orderedListId-${orderedListId}`
        document.querySelector("ul").appendChild(orderedList)

        let getOrderedList = document.getElementById(`orderedListId-${orderedListId}`)

        for (let i = 0; i < orderedListMaker.value; i++) {
            let orderedListItem = document.createElement("li")
            orderedListItem.innerText = "ordered"
            getOrderedList.appendChild(orderedListItem)
        
        orderedListId += 1
        }
    }
})