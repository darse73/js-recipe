const image = document.getElementById("image")
const button = document.getElementById("button")
const selector = document.getElementById("selector")
let listAll = []
let listSub = []
let x = 0
let y = 0

const createOption = function() {
  
  fetch(`https://dog.ceo/api/breeds/list/all`)//全てのメインの犬種名を取得する
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      for (key in data.message) { //下記の作業を全てのメインの犬種名について行う
        listAll.push(key) //配列にそのメインの犬種名を入れる
        console.log(key) //確認のためのもの
        fetch(`https://dog.ceo/api/breed/${key}/list`)//そのメインの犬種名が持つ全てののサブ犬種名を取得する
          .then((res2) => {
            return res2.json()
          })
          .then((data2) => {
            console.log(key) //確認のためのもの
            for (key in data2.message) { //下記の作業をそのメインの犬種名が持つ全てのサブ犬種名について行う
              listSub.push(data2.message[key]) //配列にそのサブ犬種名を入れる
              console.log(data2.mesgzxage[key]) //確認のためのもの
            }
            if (data2.message.length == 0) { //もしそのメインの犬種名がサブ犬種名を持っていないならば
              const dogList = document.createElement("option") //optionタグを作る
              dogList.value = listAll[x]
              dogList.textContent = listAll[x]
              selector.append(dogList)
              x++
            } else { //もしそのメインの犬種名がサブ犬種名を持っているならば
              for (let i = 0; i < data2.message.length; i++) { //そのサブ犬種名を一つずつメイン犬種にくっつける
                const dogList = document.createElement("option") //optionタグを作る
                dogList.value = `${listAll[x]}/${listSub[y]}`
                dogList.textContent = `${listSub[y]} ${listAll[x]}`
                selector.append(dogList)
                y++
              }
              x++
            }
          })
      }
    })
}

createOption()


const firstImage = function() { //最初にaffenpinscherの画像をひょうじさせる
  fetch(`https://dog.ceo/api/breed/affenpinscher/images/random`)
        .then((res) => {
          return res.json()
        })
        .then((data3) => {
          image.src = data3.message
        })
      }

firstImage()


const display = function() { //ボタンを押したら更新
  fetch(`https://dog.ceo/api/breed/${selector.value}/images/random`)
    .then((res) => {
      return res.json()
    })
    .then((data3) => {
      image.src = data3.message
    })
}

button.onclick = display
