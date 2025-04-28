function calculateAge() {
    let birthYear = prompt("Введите год вашего рождения:");
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        alert("Пожалуйста, введите правильный год.");
        return;
    }

    if (age >= 18) {
        alert("Вам " + age + " лет. Вы совершеннолетний.");
    } else {
        alert("Вам " + age + " лет. Вы несовершеннолетний.");
    }

    let daysLived = age * 365;
    alert("Вы прожили примерно " + daysLived + " дней.");
}
