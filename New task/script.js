const birthYear = parseInt(prompt("Введите ваш год рождения:"));

const currentYear = new Date().getFullYear();

const age = currentYear - birthYear;

const isAdult = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";

const daysLived = age * 365;

alert(`Ваш возраст: ${age} лет`)
alert(`Статус: ${isAdult}`);
alert(`Примерное количество прожитых дней: ${daysLived}`);
