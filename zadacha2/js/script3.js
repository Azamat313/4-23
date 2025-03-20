"use stricle"

function start () {
    let temp = +prompt("Write a temperature");
    while (temp == "" || temp == null || isNaN(temp)) {
        let temp = +prompt("Write a temperature");
    }
    if (temp < 10) {
    document.write('Cold')
    }else if (temp >= 10) {
    document.write('Warm')
    }
}
start();
