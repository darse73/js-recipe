const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")
const button4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const quiz = {
    text: "くらげの平均寿命は？",
    img: "jerryfish.png",
    choices: [
        {
            text: "半年~1年",
            feedback: "せいかい！ ちなみに不老不死のクラゲもいるみたい"
        },
        {
            text: "約10年",
            feedback: "一般的な平均寿命としてはちがうよ！"
        },
        {
            text: "約50年",
            feedback: "一般的な平均寿命としてはちがうよ！"
        },
        {
            text: "約100年",
            feedback: "一般的な平均寿命としてはちがうよ！"
        }
    ]
}

const reloadQuiz = function() {
    quizText.textContent = `問題！　${quiz.text}`
    quizImage.src = quiz.img
    button1.textContent = quiz.choices[0].text
    button2.textContent = quiz.choices[1].text
    button3.textContent = quiz.choices[2].text
    button4.textContent = quiz.choices[3].text
}

const choose = function(choiceNumber) {
    feedback.textContent = quiz.choices[choiceNumber].feedback
}

button1.onclick = function() {
    choose(0)
}

button2.onclick = function() {
    choose(1)
}

button3.onclick = function() {
    choose(2)
}

button4.onclick = function() {
    choose(3)
}

reloadQuiz()