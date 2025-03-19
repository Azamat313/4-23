// Находим элементы на странице
const inputText = document.getElementById('inputText');
const checkButton = document.querySelector('button');

// Вешаем обработчик события на кнопку
checkButton.onclick = () => {
    // Получаем значение из поля ввода и удаляем пробелы
    const str = inputText.value.trim();

    // Проверяем, пустая ли строка, и выводим результат в консоль
    if (str === "") {
        console.log("Строка пустая");
    } else {
        console.log("Строка не пустая");
    }
};