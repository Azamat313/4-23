let petName = "тучка";
let petAge = 3;
let petType = "кошка";
let humanAge;

if (petType === "собака") {
    humanAge = petAge * 7;
} else if (petType === "кошка") {
    humanAge = petAge * 5;
} else {
    humanAge = petAge;
}

alert(`Имя питомца: ${petName}\nВозраст питомца в человыческих годах: ${humanAge}`);
