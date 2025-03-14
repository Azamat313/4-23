let petName = prompt("What is your pet's name?");
let petType = parseInt(prompt("What type of pet is it?"), 10);
let petAge = prompt("How old is your pet? (Dog/Cat)");

let humanAge

if (petType == "Dog", "dog", "DOG") {
    humanAge = petAge * 7;
} else if (petType == "Cat", "cat", "CAT") {
    humanAge = petAge * 6;
} else {
    humanAge = "Unknown";
}

if (humanAge) {
    let message = `Age ${petName} in human age: ${humanAge}`;
    alert(message);
    console.log(message);
}
