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

    deleteButton.onclick = function() { //なぜこれが発火する？ → deleteButtonに付随してついていくから？
        card.remove() //なぜすべてのカードが消えない？
    }

    card.append(deleteButton)

    return card
}

const container2 = document.getElementById("cards-container2")
const inputElement2 = document.getElementById("input-todo2")
const addButton2 = document.getElementById("add-button2")

addButton2.onclick = function() {
    const card = createCard(inputElement2.value)
    container2.append(card)

    inputElement2.value = ""
}

inputElement2.onkeydown = function(e) {
    if(e.keyCode === 13){
        const card = createCard(inputElement2.value)
        container2.append(card)

        inputElement2.value = ""
    }
}

const container3 = document.getElementById("cards-container3")
const inputElement3 = document.getElementById("input-todo3")
const addButton3 = document.getElementById("add-button3")

addButton3.onclick = function() {
    const card = createCard(inputElement3.value)
    container3.append(card)

    inputElement3.value = ""
}

inputElement3.onkeydown = function(e) {
    if(e.keyCode === 13){
        const card = createCard(inputElement3.value)
        container3.append(card)

        inputElement3.value = ""
    }
}

const button = document.getElementById("button")
const mainContainer = document.getElementById("main-container")
let number = 3

button.onclick = function() {
    const listContainer = createListContainer()
    mainContainer.append(listContainer)
}

const createListContainer = function() {
    const listContainer = document.createElement("div")
    listContainer.className = "list-container"

    number ++

    const listHeader = document.createElement("div")
    listHeader.className = "list-header"
    listHeader.textContent = `ギークサロン${number}`
    listContainer.append(listHeader)

    const container = document.createElement("div")
    container.className = "cards-container"
    container.id = `cards-container`
    listContainer.append(container)
    
    const listFooter = document.createElement("div")
    listFooter.className = "list-footer"
    listContainer.append(listFooter)

    const inputContainer = document.createElement("div")
    inputContainer.className = "input-container"
    listFooter.append(inputContainer)

    const inputElement = document.createElement("input")
    inputElement.type = "text"
    inputElement.className = "input-todo"
    inputElement.id = `input-todo`
    inputContainer.append(inputElement)

    const addButton = document.createElement("div")
    addButton.className = "input-button"
    addButton.id = `add-button`
    addButton.textContent = "追加"
    inputContainer.append(addButton)

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
    
        deleteButton.onclick = function() { //なぜこれが発火する？ → deleteButtonに付随してついていくから？
            card.remove() //なぜすべてのカードが消えない？
        }
    
        card.append(deleteButton)
    
        return card
    }

    return listContainer
}
