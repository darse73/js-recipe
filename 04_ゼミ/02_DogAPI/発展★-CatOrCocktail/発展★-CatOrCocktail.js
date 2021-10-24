const imageElement = document.getElementById("dog-image")

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.dir(data)
    imageElement.src = data[0].url
  })
