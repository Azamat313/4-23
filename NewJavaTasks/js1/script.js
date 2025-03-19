function addFruit() {
    let input = document.getElementById("fruitInput");
    if (input.value.trim()) {
        let li = document.createElement("li");
        li.textContent = input.value;
        document.getElementById("fruitList").appendChild(li);
        input.value = "";
    }
}

function calculateAge() {
    let year = document.getElementById("birthYear").value;
    document.getElementById("ageResult").textContent = "Возраст: " + (2025 - year);
}

function checkTextLength() {
    let text = document.getElementById("textInput").value;
    document.getElementById("textLength").textContent = "Длина: " + text.length;
}
