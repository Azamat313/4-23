let start = 10;
let day = 1;
document.getElementById("button").addEventListener("click", function() {
    document.getElementById("tenge").innerText = `баланс: ${start} тенге
    день: ${day}`
    start +=5; day++
});
