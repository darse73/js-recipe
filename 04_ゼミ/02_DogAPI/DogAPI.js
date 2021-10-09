const imageElement = document.getElementById("dog-image")

fetch("https://cdn2.thecatapi.com/images/af8.jpg")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        imageElement.src = data.message
    })