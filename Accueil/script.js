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
        listItem.prepend(checkBox);

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                listItem.setAttribute("style", "text-decoration-line: line-through;")
            } else {
                listItem.setAttribute("style", "text-decoration-line: none;")
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });

    } else {
        alert("Veuillez entrer une tâche valide.");
    }

localStorage.setItem(task.concat(i), taskText);
i++
}