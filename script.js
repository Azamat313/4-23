// Таймер
let count = 10;
let timerElement = document.getElementById("timer");
let timer = setInterval(function() {
    timerElement.innerText = count;
    count = count - 1;
    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);

// Проверка четности числа
document.getElementById("checkButton").onclick = function() {
    let num = document.getElementById("numberInput").value;
    let resultElement = document.getElementById("result");
    if (num == "") {
        resultElement.innerText = "Введите число!";
    } else {
        num = Number(num);
        if (num % 2 == 0) {
            resultElement.innerText = "Число четное";
        } else {
            resultElement.innerText = "Число нечетное";
        }
    }
};

// Подсчет количества слов
document.getElementById("countWordsButton").onclick = function() {
    let text = document.getElementById("textInput").value;
    text = text.trim();
    let words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count = count + 1;
        }
    }
    document.getElementById("wordCountResult").innerText = "Количество слов: " + count;
};
