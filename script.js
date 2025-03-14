// script.js
function calculateDiscount() {
    let price = parseFloat(document.getElementById('price').value);
    let discountPercent = parseFloat(document.getElementById('discount').value);
    
    let discountAmount = (price * discountPercent) / 100;
    let finalPrice = price - discountAmount;
    
    document.getElementById('result').innerHTML = `Экономия: ${discountAmount.toFixed(2)} тенге<br>Итоговая цена: ${finalPrice.toFixed(2)} тенге`;
}
