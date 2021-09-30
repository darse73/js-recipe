const circle = document.getElementById("circle")
const box = document.getElementById("box")

circle.onmouseenter = function() {
    figure.classList.add("rounded")
}

box.onmouseenter = function() {
    figure.classList.remove("rounded")
}