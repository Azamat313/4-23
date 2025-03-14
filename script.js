function calculateTip() {
    let billAmount = parseFloat(document.getElementById("bill").value);
    let tipPercent = parseFloat(document.getElementById("tip").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById("result").innerText = "Введите корректную сумму!";
        return;
    }

    let tipAmount = billAmount * (tipPercent / 100);
    let totalAmount = billAmount + tipAmount;

    document.getElementById("result").innerText = 
        `Чаевые: ${tipAmount.toFixed(2)} ТГ | Итоговая сумма: ${totalAmount.toFixed(2)} ТГ`;
}
