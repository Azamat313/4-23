document.getElementById('calculateButton').addEventListener('click', () => {
    const number = +document.getElementById('numberInput').value;
    let sum = (number * (number + 1)) / 2;
    document.getElementById('result').textContent = `Сумма: ${sum}`;
});