function findNumbers() {
    const input = document.getElementById("inputNumbers").value;

    const numbers = input.split(",");

    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = parseFloat(numbers[i]);
        if (num > 10) {
            result.push(num); 
        }
    }

    // шыгару результат
    const resultElement = document.getElementById("result");
    if (result.length > 0) {
        resultElement.textContent = "Числа больше 10: " + result.join(", ");
    } else {
        resultElement.textContent = "Чисел больше 10 нет.";
    }
} 