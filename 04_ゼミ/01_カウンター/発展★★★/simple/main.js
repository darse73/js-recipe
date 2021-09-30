const displayLeft = document.getElementById("display-left")
const displayCenter = document.getElementById("display-center")
const displayRight = document.getElementById("display-right")
const Plus = document.getElementById("plus")
const Minus = document.getElementById("minus")
const Multiplied = document.getElementById("multiplied")
const Divided = document.getElementById("divided")
const Equal = document.getElementById("equal")
let ope = 0

function disLeft(value) {
    displayRight.value = 0
    Equal.style.backgroundColor = '#efefef'
    if(displayLeft.value == 0){
        displayLeft.value = "" + value
    }else{
        displayLeft.value += value
    }
}

function delLeft() {
    displayLeft.value = displayLeft.value.slice(0,-1)
    if(displayLeft.value == ""){
        displayLeft.value = 0
    }
}

function PLUS() {
    if(ope == 1){
        ope = 0
        Plus.style.backgroundColor = "#efefef"
    }else{
        ope = 1
        Plus.style.backgroundColor = 'rgba(171, 191, 253, 0.692)'
        Minus.style.backgroundColor = '#efefef'
        Multiplied.style.backgroundColor = '#efefef'
        Divided.style.backgroundColor = '#efefef'
    }

}

function MINUS() {
    if(ope == 2){
        ope = 0
        Minus.style.backgroundColor = "#efefef"
    }else{
        ope = 2
        Plus.style.backgroundColor = '#efefef'
        Minus.style.backgroundColor = 'rgba(171, 191, 253, 0.692)'
        Multiplied.style.backgroundColor = '#efefef'
        Divided.style.backgroundColor = '#efefef'
    }
}

function MULTIPLIED() {
    if(ope == 3){
        ope = 0
        Multiplied.style.backgroundColor = "#efefef"
    }else{
        ope = 3
        Plus.style.backgroundColor = '#efefef'
        Minus.style.backgroundColor = '#efefef'
        Multiplied.style.backgroundColor = 'rgba(171, 191, 253, 0.692)'
        Divided.style.backgroundColor = '#efefef'
    }
}

function DIVIDED() {
    if(ope == 4){
        ope = 0
        Multiplied.style.backgroundColor = "#efefef"
    }else{
        ope = 4
        Plus.style.backgroundColor = '#efefef'
        Minus.style.backgroundColor = '#efefef'
        Multiplied.style.backgroundColor = '#efefef'
        Divided.style.backgroundColor = 'rgba(171, 191, 253, 0.692)'
    }
}

function disCenter(value) {
    displayRight.value = 0
    Equal.style.backgroundColor = '#efefef'
    if(displayCenter.value == 0){
        displayCenter.value = "" + value
    }else{
        displayCenter.value += value
    }
}

function delCenter() {
    displayCenter.value = displayCenter.value.slice(0,-1)
    if(displayCenter.value == ""){
        displayCenter.value = 0
    }
}

function calc() {
    Equal.style.backgroundColor = 'rgba(171, 191, 253, 0.692)'
    if(ope == 1){
        displayRight.value = displayLeft.value + displayCenter.value
    }else if(ope == 2){
        displayRight.value = displayLeft.value - displayCenter.value
    }else if(ope == 3){
        displayRight.value = displayLeft.value * displayCenter.value
    }else if(ope == 4){
        displayRight.value = displayLeft.value / displayCenter.value
    }else{
        alert("演算子を入力してください")
    }

}
