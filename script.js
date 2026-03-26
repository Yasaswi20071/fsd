function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("div");
    taskText.innerHTML = `<strong>${taskInput.value}</strong><br>
                          <span>Due: ${dateInput.value}</span>`;

    const buttons = document.createElement("div");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(buttons);
    taskList.appendChild(li);

    taskInput.value = "";
    dateInput.value = "";
}