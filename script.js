"use strong"

//first task
let Time = 0;
const TimeDisplay = document.getElementById('timeWeb');

setInterval(() => {
    Time++;
    TimeDisplay.textContent = Time;
}, 1000)

//second task
const names = ['Kirill', 'Anya', 'Olya', 'Aristarh', 'Den'];
const sorting = [...names].sort((a, b) => a.length - b.length);
console.log(sorting);

//third task
let ask = +prompt('Введите число для вычесления простого числа: ', "100");
if (ask < 2) {
    console.log('Простое число не может быть меньше 2');
} else {
    PrimeNumber = true;

    for (let i = 2; i <= Math.sqrt(ask); i++) {
        if (ask % 2 === 0) {
            PrimeNumber = false;
            break;
        }
    }

    if (PrimeNumber) {
        console.log('Это простое число');
    } else {
        console.log('Это составное число');
    }
}