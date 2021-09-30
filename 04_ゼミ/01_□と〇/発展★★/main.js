const figure = document.getElementById("figure")

figure.onclick = function() {
    if(figure.classList.contains("triangle")===true){
        figure.classList.remove("circle","triangle")
        figure.classList.add("square")
    }else if(figure.classList.contains("circle")===true){
        figure.classList.add("triangle")
        figure.classList.remove("circle","square")
    }else{
        figure.classList.add("circle")
    }
}