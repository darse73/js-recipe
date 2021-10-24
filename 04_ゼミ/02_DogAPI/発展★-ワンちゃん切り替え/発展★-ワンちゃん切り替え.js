const image = document.getElementById("image")
const button = document.getElementById("button")

const update = function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        image.src = data.message
    })
}

window.onload = update
button.onclick = update