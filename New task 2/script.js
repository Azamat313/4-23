document.getElementById("text").addEventListener("click", function() {
    const colors = ["red", "blue", "green", "purple", "orange", "pink"];  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];  
    this.style.color = randomColor;
});