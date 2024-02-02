const storageName = "key";
const input = document.getElementById("input");

function addTask(){
    if (input.value == "") {
        alert("Write your task");
    }
    else{
        let values = JSON.parse(localStorage.getItem(storageName) || "[]");
        values.push({
            task: input.value
        })
        localStorage.setItem(storageName, JSON.stringify(values));
        showTasks();
    }
    input.value = '';
}

function showTasks(){
    let values = JSON.parse(localStorage.getItem(storageName) || "[]");
    let tasks = document.getElementById("task");
    tasks.innerHTML = '';
    for (let i = 0; i < values.length; i++) {
        tasks.innerHTML += `<li>${values[i]['task']}<button id="btn" onclick="removeTasks()">✓</button></li>`
    }
}

function removeTasks(data){
    let values = JSON.parse(localStorage.getItem(storageName) || "[]");
    let i = values.findIndex(x => x.task == data);
    values.splice(i, 1);
    localStorage.setItem(storageName, JSON.stringify(values));
    showTasks();
}

showTasks();