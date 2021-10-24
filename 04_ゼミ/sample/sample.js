const image = document.getElementById("image")
const button = document.getElementById("button")
const selector = document.getElementById("selector")

fetch("https://dog.ceo/api/breed/hound/list")
.then((res) => {
  return res.json()
})
.then((data) => {
  console.dir(data)
})