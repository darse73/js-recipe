const image = document.getElementById("image")
const button = document.getElementById("button")
const selector = document.getElementById("selector")

const createOption = function() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.dir(data)
            fetch(`https://dog.ceo/api/breed/${}/list`)
            .then((res) => {
                return res.json()
            })
            .then((data2) => {
                console.dir(data2)
                //もしサブ犬種がないならば～
                if(1+1 === 2){
                    console.log(element)
                    }
                }
            )
                
        })
}

        

createOption()