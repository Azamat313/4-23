const g = (id) => document.getElementById(id);

function countVowels() {
    g("vowelResult").innerText = "Гласных: " + g("textInput").value.match(/[аеёиоуыэюяaeiou]/gi)?.length || 0;
}

function showMultiplicationTable() {
    g("multiplicationResult").innerHTML = [...Array(10)].map((_, i) => `<li>5 × ${i+1} = ${5*(i+1)}</li>`).join("");
}

function checkNumber() {
    let n = g("numberInput").value;
    g("numberResult").innerText = n > 0 ? "Положительное" : n < 0 ? "Отрицательное" : "Ноль";
}
