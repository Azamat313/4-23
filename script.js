let rub = prompt('Введите сумму в рублях');

const cur_usd = 0.011545;
const cur_eur = 0.010609;
const cur_gbp = 0.008903;

let usd = rub * cur_usd;
let eur = rub * cur_eur;
let gbp = rub * cur_gbp;

alert(`${rub} RUB = ${usd} USD`);
alert(`${rub} RUB = ${eur} EUR`);
alert(`${rub} RUB = ${gbp} GBP`);


