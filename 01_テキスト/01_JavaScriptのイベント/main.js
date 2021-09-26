// イベントが発生する要素を取得する
const button = document.getElementById("button")

function alertMessage() {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue