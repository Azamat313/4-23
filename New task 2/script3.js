function checkDay() {
    const day = document.getElementById("dayInput").value.toLowerCase();

    if (day === "понедельник" || day === "вторник" || day === "среда" || 
        day === "четверг" || day === "пятница") {
        document.getElementById("result").textContent = "Это рабочий день.";
    } else if (day === "суббота" || day === "воскресенье") {
        document.getElementById("result").textContent = "Это выходной день!";
    } else {
        document.getElementById("result").textContent = "Ошибка! Введите день недели правильно.";
    }
}