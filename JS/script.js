const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
var task = "task";
var i = 0;

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (mod) => {
    if (mod.key === 'Enter') {
        addTask();
    }
});




function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        var listItem = document.createElement("li");

        listItem.textContent = taskText;
        listItem.setAttribute("id", "taskText")
        taskList.appendChild(listItem);
        taskInput.value ="";

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBox")
        listItem.prepend(checkBox);

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                for (let i = 0; i < 2; i++ ) {
                    listItem.style.cssText = `text-decoration-line: line-through; opacity: 50%;`
                }

            } else {
                listItem.setAttribute("style", "text-decoration-line: none;")
            }
        });
        
        
        const modBtn = document.createElement("button");
        modBtn.innerHTML = '<img src="../Images/lucide square-pen.png">';
        modBtn.setAttribute("id", "taskModBtn");
        modBtn.setAttribute("title", "Modifier");
        listItem.append(modBtn);

        const modTask = document.createElement("input");
        modTask.setAttribute("type", "text");
        modTask.setAttribute("id", "taskModInput");
        modTask.setAttribute("placeholder", "Modifier la tâche...");

        const confirmModBtn = document.createElement("button");
        confirmModBtn.textContent = "OK";
        confirmModBtn.setAttribute("id", "confirmMod");



        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", "delTask");
        deleteBtn.setAttribute("title", "Supprimer");
        deleteBtn.innerHTML = '<img src="../Images/bx trash.png">';
        listItem.append(deleteBtn);

        modBtn.addEventListener("click", () => {
            listItem.append(modTask);
            listItem.append(confirmModBtn);

            modTask.addEventListener("keypress", (mod) => {
                if (mod.key === 'Enter') {
                    listItem.textContent = modTask.value;
                    listItem.prepend(checkBox);
                    listItem.append(modBtn);
                    listItem.append(deleteBtn);
                }
            });

            confirmModBtn.addEventListener("click", () => {
                    listItem.textContent = modTask.value;
                    listItem.prepend(checkBox);
                    listItem.append(modBtn);
                    listItem.append(deleteBtn);

            });
        });

        deleteBtn.addEventListener("click", () => {
            listItem.remove();
            localStorage.removeItem();
        });



        


    } else {
        alert("Veuillez entrer une tâche valide.");
    }

localStorage.setItem(task.concat(i), taskText);
i++
document.getElementById("clear").addEventListener("click", () => {
    listItem.remove();
    localStorage.clear();
    i = 0
});
}