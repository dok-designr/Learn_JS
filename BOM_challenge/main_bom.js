let input = document.querySelector(".input");
let supmit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks-contenr");
let claerAll = document.querySelector(".claer-all");
let emptyText = document.querySelector(".empty-text");


// empty array to store the task
let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
};

getDataFromLocalStorage();

if (arrayOfTasks.length === 0) {
    tasksDiv.appendChild(emptyText);
}

// add Task
supmit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value); // add task to array of tasks
        input.value = ""; // empty array field
        
    }
};

claerAll.onclick = function () {
    // empty tasks local storage
    window.localStorage.removeItem("tasks");
    // empty tasks div
    tasksDiv.innerHTML = "";
    // to empty tasks array
    arrayOfTasks = []

        tasksDiv.appendChild(emptyText)


};


tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        // remove element from localStorage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"))
        // remove element from bage
        e.target.parentElement.remove();
    }
    // task element
    if (e.target.classList.contains("task")) {
        // toggle completed for the task
        toggleStatusTaskWith(e.target.getAttribute("data-id"))

        // toggle done class
        e.target.classList.toggle("done");

    }

});

function addTaskToArray(taskText) {
    // Task data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    // push task to array of tasks
    arrayOfTasks.push(task);
    // add tasks to page
    addElementsToPageFrom(arrayOfTasks);
    // add task to local storge 
    addDataToLocalStorageFrom(arrayOfTasks);
    /* for test 
    console.log(arrayOfTasks);
    console.log(JSON.stringify(arrayOfTasks)) */
}

function addElementsToPageFrom(arrayOfTasks) {
    // empty tasks div
    tasksDiv.innerHTML = "";
    // looping on array of tasks
    arrayOfTasks.forEach((task) => {
        // create main div
        let div = document.createElement("div");
        div.className = "task";
        // check if task is done 
        if (task.completed) {
        div.className = "task done";
            
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title))
        // create delete btn
        let span = document.createElement("span");
        span.className = "del";
        // append delete btn to main div
        span.appendChild(document.createTextNode("×"));
        div.appendChild(span);
        // add task div to tasks-contenr
        tasksDiv.appendChild(div);

    });
};


function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
};

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks)
    }
};


function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId); 
    addDataToLocalStorageFrom(arrayOfTasks);
    
    if (arrayOfTasks.length === 0) {
        tasksDiv.appendChild(emptyText);
    }

}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : ( arrayOfTasks[i].completed = false) 
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}



















/* 
<div class="task">sasasas
<div class="delete-task">delete</div>


let str = {
    title:  input
}

let addBtn = document.querySelector('.add');


addBtn.addEventListener("click", (e) => {
    let input = document.querySelector('.input').value;
    let tasksContenr = document.querySelector('.tasks-contenr');

    window.localStorage.setItem()
    
    let task = document.createElement('div');
    let deleteTask = document.createElement('div');
    
    task.className = 'task';
    task.innerText = input;
    
    deleteTask.className = 'delete-task';
    deleteTask.innerText = "delete";
    
        
        tasksContenr.appendChild(task)
        task.appendChild(deleteTask)

        console.log()
    
});


console.log(task);


function create() {
        let input = document.querySelector('.input').value;
    let addBtn = document.querySelector('.add');

    let tasksContenr = document.querySelector('.tasks-contenr');
    
    let task = document.createElement('div');
    let deleteTask = document.createElement('div');
    
    task.className = 'task';
    task.innerText = input;
    
    deleteTask.className = 'delete-task';
    deleteTask.innerText = "delete";

    
    addBtn.onclick = function () {
        
        if (input != "") {
            tasksContenr.appendChild(task)
            task.appendChild(deleteTask)
            
            
            
        } else { }

    }
}

document.body.onmousemove = function () {


    create()


}

 */