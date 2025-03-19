function calculateDiscount() {
    let price = parseFloat(document.getElementById("price").value);
    let discountPercent = parseFloat(document.getElementById("discount").value);

    if (isNaN(price) || isNaN(discountPercent) || price <= 0 || discountPercent < 0) {
        document.getElementById("result").innerHTML = "Пожалуйста, введите корректные значения";
        return;
    }

    let discountAmount = (price * discountPercent) / 100;
    let finalPrice = price - discountAmount;

    document.getElementById("result").innerHTML = `
        Скидка: <b>${discountAmount.toFixed(2)} $</b> <br>
        Итоговая цена: <b>${finalPrice.toFixed(2)} $</b>
    `;
}
