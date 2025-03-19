document.getElementById('checkButton').addEventListener('click', () => {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    document.getElementById('result').textContent = isValid ? "Email корректный" : "Email некорректный";
});