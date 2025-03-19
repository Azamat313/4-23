let time = 10; 

let interval = setInterval(() => {
   
    if (time % 2 === 0) { 
        document.getElementById("timer").innerText = time;
    }
    time--; 
    
    if (time < 0) {
        clearInterval(interval);
    }
}, 1000); 
document.getElementById("button").addEventListener("click", function() {
    let mytimer = document.getElementById("timer"); 

    if (mytimer.style.display === "none") {
        mytimer.style.display = "block"; 
    } else {
        mytimer.style.display = "none";
    }
});