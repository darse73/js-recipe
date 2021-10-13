const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
    const card = createCard(input.value)
    memoContainer.append(card)

    input.value = ""
}

const createCard = function(text) {
    const card = document.createElement("div")
    card.textContent = text
    card.className = "card"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "削除"
    deleteButton.onclick = function() {
        card.remove()
    }
    card.append(deleteButton)

    return card
}
