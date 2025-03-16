// Переменная с ценой товара
let price = 100; // например, 100 единиц

// Переменная с процентом скидки
let discountPercentage = 20; // например, 20%

// Вычисляем сумму скидки
let discountAmount = (price * discountPercentage) / 100;

// Итоговая цена после скидки
let finalPrice = price - discountAmount;

// Выводим экономию и новую цену
console.log("Экономия: " + discountAmount + " единиц");
console.log("Новая цена: " + finalPrice + " единиц");
