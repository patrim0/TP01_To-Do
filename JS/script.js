const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
var task = "task";
var i = 0;

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const listItem = document.createElement("li");

        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value ="";

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBox")
        listItem.prepend(checkBox);

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                for (let i = 0; i < 2; i++ ) {
                    listItem.setAttribute("style", "text-decoration-line: line-through;", "color: lightgray;")
                }

            } else {
                listItem.setAttribute("style", "text-decoration-line: none;")
            }
        });
        
        
        const modBtn = document.createElement("button");
        modBtn.innerHTML = '<i class="gg-pen"></i>'
        modBtn.setAttribute("id", "taskModBtn");
        modBtn.setAttribute("title", "Modifier");
        listItem.append(modBtn);

        const modTask = document.createElement("input");
        modTask.setAttribute("type", "text");
        modTask.setAttribute("id", "taskModInput");
        modTask.setAttribute("placeholder", "Modifier la tâche...");

        const confirmModBtn = document.createElement("button");
        confirmModBtn.textContent = "Confirmer";
        confirmModBtn.setAttribute("id", "confirmMod");



        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", "delTask");
        deleteBtn.setAttribute("title", "Supprimer");
        deleteBtn.innerHTML = '<i class="gg-trash"></i>';
        listItem.append(deleteBtn);

        modBtn.addEventListener("click", () => {
            listItem.append(modTask);
            modTask.append(confirmModBtn);
        });

        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });



        


    } else {
        alert("Veuillez entrer une tâche valide.");
    }

localStorage.setItem(task.concat(i), taskText);
i++
}