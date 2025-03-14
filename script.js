let rub = prompt('enter the amount in rub')
let usdRate = 90; 
let eurRate = 98; 
let gbpRate = 112;  

let usdAmount = rub / usdRate;
let eurAmount = rub / eurRate;
let gbpAmount = rub / gbpRate;

alert(`${rub} rub = ${usdAmount} usd`)
alert(`${rub} rub = ${eurAmount} eur`)
alert(`${rub} rub = ${gbpAmount} gbp`)