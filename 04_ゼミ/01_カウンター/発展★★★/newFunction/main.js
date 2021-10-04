let displayTop = document.getElementById("display-top")
let displayBottom = document.getElementById("display-bottom")

function dis(value) {
    if(displayTop.value == 0){ /*===はなぜだめ？*/
        displayTop.value = "" + value
    }else{
        displayTop.value += value
    }
    displayBottom.value = 0
}

function calc() {
    if(displayTop.value.includes("×")){/*valueの値は文字列？*/
        displayTop.value = displayTop.value.replace("×","*")
    }
    if(displayTop.value.includes("÷")){/*valueの値は文字列？*/
        displayTop.value = displayTop.value.replace("÷","/")
    }
    displayBottom.value = new Function("return " + displayTop.value)()
    if(displayTop.value.includes("*")){/*valueの値は文字列？*/
        displayTop.value = displayTop.value.replace("*","×")
    }
    if(displayTop.value.includes("/")){/*valueの値は文字列？*/
        displayTop.value = displayTop.value.replace("/","÷")
    }
}

function del() {
    displayTop.value = displayTop.value.slice(0,-1)
    displayBottom.value = 0
    if(displayTop.value === ""){
        displayTop.value = 0
    }
}

function ac() {
    displayTop.value = 0
    displayBottom.value = 0
}