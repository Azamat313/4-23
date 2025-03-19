let price = 1000000;  
let discount = 50;  

let discountAmount = (price * discount) / 100;  
let finalPrice = price - discountAmount;  

console.log(`Экономия: ${discountAmount} руб.`);  
console.log(`Новая цена: ${finalPrice} руб.`);  
alert(`Экономия: ${discountAmount} руб.\nНовая цена: ${finalPrice} руб.`);  
