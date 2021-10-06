const container = document.getElementById("cards-container")
const inputElement = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
}

inputElement.onkeydown = function(e) {
    if(e.keyCode === 13){
        const card = createCard(inputElement.value)
        container.append(card)

        inputElement.value = ""
    }
}

const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    deleteButton.textContent = "削除"

    deleteButton.onclick = function() {
        card.remove()
    }

    card.append(deleteButton)

    return card
}