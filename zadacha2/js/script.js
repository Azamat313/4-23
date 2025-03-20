"use strict"

let list = document.getElementById('list');

list.addEventListener('click', function (ev) {
   if (ev.target.tagName === "LI") {
     ev.target.classlist.toggle('checked');
   } else if(ev.target.tagName === "BUTTON") {
     let div = ev.target.parentNode;
     div.remove();
   }
}, false);
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('itemInput').value.trim();
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === "") {
      alert("Введи свое дело, мужик!")
    } else {
        document.getElementById('list').appendChild(li);
    }
    
    document.getElementById('itemInput').value = "";
    
    let closeButton = document.createElement('button');
      closeButton.className = "close";
      closeButton.textContent = "Удалить";
      li.appendChild(closeButton);
   }