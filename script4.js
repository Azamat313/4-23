let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let users = JSON.parse(localStorage.getItem("users")) || {};
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showLogin() { setScreen("auth"); }
function showRegister() { setScreen("register"); }
function showTasks() { setScreen("tasks"); renderTasks(); }
function showTaskForm() { 
    document.getElementById("task-id").value = ""; 
    setScreen("task-form"); 
}

function setScreen(screen) {
    document.querySelectorAll("div").forEach(div => div.style.display = "none");
    document.getElementById(screen).style.display = "block";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (users[user] && users[user].password === pass) {
        currentUser = { name: user, role: users[user].role };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        showTasks();
    } else alert("Неверный логин или пароль");
}

function register() {
    let user = document.getElementById("reg-username").value;
    let pass = document.getElementById("reg-password").value;
    let role = document.getElementById("reg-role").value;
    if (users[user]) return alert("Пользователь уже зарегистрирован");
    users[user] = { password: pass, role };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Регистрация успешна");
    showLogin();
}

function logout() {
    localStorage.removeItem("currentUser");
    currentUser = null;
    showLogin();
}

function saveTask() {
    let id = document.getElementById("task-id").value;
    let task = {
        id: id ? Number(id) : Date.now(),
        title: document.getElementById("task-title").value,
        desc: document.getElementById("task-desc").value,
        date: document.getElementById("task-date").value,
        priority: document.getElementById("task-priority").value,
        status: document.getElementById("task-status").value,
        assignee: currentUser.role === "admin" ? document.getElementById("task-assignee").value : currentUser.name
    };

    if (id) {
        tasks = tasks.map(t => (t.id === Number(id) ? task : t));
    } else {
        tasks.push(task);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function renderTasks() {
    let list = document.getElementById("task-list");
    list.innerHTML = "";
    let filterStatus = document.getElementById("task-filter").value;
    
    tasks.filter(t => currentUser.role === "admin" || t.assignee === currentUser.name)
         .filter(t => filterStatus === "all" || t.status === filterStatus)
         .forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${task.title}</strong> (${task.priority})
                <br> ${task.desc}
                <br> Срок: ${task.date}
                <br> Статус: <strong>${task.status}</strong>
                <br> Исполнитель: ${task.assignee}
                <br>
                <button onclick="editTask(${task.id})">Редактировать</button>
                <button onclick="deleteTask(${task.id})">Удалить</button>
            `;
            list.appendChild(li);
         });
}

function editTask(id) {
    let task = tasks.find(t => t.id === id);
    if (!task) return;
    document.getElementById("task-id").value = task.id;
    document.getElementById("task-title").value = task.title;
    document.getElementById("task-desc").value = task.desc;
    document.getElementById("task-date").value = task.date;
    document.getElementById("task-priority").value = task.priority;
    document.getElementById("task-status").value = task.status;
    document.getElementById("task-assignee").value = task.assignee;
    setScreen("task-form");
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

if (currentUser) showTasks();
else showLogin();

