let name = prompt("Имя питомца:");
let type = prompt("Вид питомца (Собака/Кошка):");
let age = prompt("Возраст питомца:");

if (type === "Собака") {
    age = age * 7;
} else if (type === "Кошка") {
    age = age * 6;
} else {
    age = "неизвестен";
}

alert(name + " в человеческом возрасте: " + age);