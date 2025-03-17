function calculate() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // Определение совершеннолетия
    const isAdult = age >= 18;
    const adultStatus = isAdult ? "Совершеннолетний" : "Несовершеннолетний";

    // Расчет дней прожитых
    const birthDate = new Date(birthYear, 0, 1); // Предполагаем, что день рождения - 1 января
    const currentDate = new Date();
    const timeDiff = currentDate - birthDate;
    const daysLived = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Вывод результатов
    document.getElementById("age").innerText = `Ваш возраст: ${age} лет`;
    document.getElementById("adultStatus").innerText = `Статус: ${adultStatus}`;
    document.getElementById("daysLived").innerText = `Примерно прожито дней: ${daysLived}`;
}