let inputField = document.querySelectorAll("input")[0];
let submitBtn = document.querySelectorAll("input")[1];
let taskElement,inputValue,tasks;
let tasksDiv = document.querySelector(".tasks"),deleteBtn;

submitBtn.addEventListener("click",function(event) {
    event.preventDefault();
    taskElement = document.createElement("p");
    taskElement.style.backgroundColor = "white";
    taskElement.style.padding = "10px 20px";
    taskElement.style.fontSize = "20px";
    taskElement.setAttribute("title",inputField.value);
    taskElement.setAttribute("id",Math.random());
    taskElement.append(inputField.value);
    deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.backgroundColor = "#891652";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "3px";
    deleteBtn.style.color = "white";
    deleteBtn.style.fontWeight = "bold";
    deleteBtn.style.display = "inline-block"
    taskElement.append(deleteBtn);
    tasksDiv.append(taskElement);
    tasks = ` {"title": ${inputField.value}, "id": ${taskElement.getAttribute("id")}}`;
    tasks = JSON.parse(tasks);
    window.localStorage.setItem("tasks",tasks);
})

if(deleteBtn) {
    deleteBtn.addEventListener("click",function() {
    deleteBtn.parentElement.remove();
})
}



