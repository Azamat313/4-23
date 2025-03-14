"use strict";
const RATES = {
    USD: 0.012, 
    EUR: 0.011, 
    GBP: 0.0090 
};
const convert = (amount, rate) => {
    return (amount * rate).toFixed(2);
};
const updateResults = (rubles) => {
    document.getElementById('usdResult').textContent = `$${convert(rubles, RATES.USD)}`;
    document.getElementById('eurResult').textContent = `€${convert(rubles, RATES.EUR)}`;
    document.getElementById('gbpResult').textContent = `£${convert(rubles, RATES.GBP)}`;
};
const rublesInput = document.getElementById('rublesInput');
rublesInput.addEventListener('input', (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    e.target.value = value;
    updateResults(Number(value));
});
updateResults(1000);