// Находим элементы
const inputText = document.getElementById('inputText');
const countButton = document.getElementById('countButton');
const result = document.getElementById('result');

// Вешаем обработчик события на кнопку
countButton.onclick = () => {
    result.textContent = `Количество символов: ${inputText.value.length}`;
};