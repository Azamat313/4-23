
let petName = prompt("Введите имя вашего питомца:");
let petAge = parseInt(prompt("Введите возраст вашего питомца (в годах):"));
let petType = prompt("Введите вид вашего питомца (собака/кошка):");

let humanAge;


if (petType.toLowerCase() === "собака") {
    humanAge = petAge * 7;
} else if (petType.toLowerCase() === "кошка") {
    humanAge = petAge * 5;
} else {
    alert("Неизвестный вид питомца. Пожалуйста, введите 'собака' или 'кошка'.");
}


if (humanAge) {
    console.log(`Ваш питомец ${petName} имеет возраст ${humanAge} в человеческих годах.`);
    alert(`Ваш питомец ${petName} имеет возраст ${humanAge} в человеческих годах.`);
}

  