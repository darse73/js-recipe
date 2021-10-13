const image = document.getElementById("image")
const button = document.getElementById("button")

const update = function() {
    const selector = document.getElementById("selector")

    fetch(`https://dog.ceo/api/breed/${selector.value}/images/random`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        image.src = data.message
    })
}

update()
button.onclick = update
