const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value ="";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });

    } else {
        alert("Veuillez entrer une tâche valide.");
    }
}
