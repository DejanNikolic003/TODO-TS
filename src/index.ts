import type { Item } from "./interfaces/Item";
import { showTasks } from "./models/tasks";

const tasks: Item[] = [
    {
        "id": 1,
        "title": "Test Todo",
        "description": "Todo description",
        "priority": "High",
        "due_date": "2025.08.10"
    }
];

showTasks(tasks);

const createTaskForm = document.getElementById("createTask") as HTMLFormElement;

createTaskForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    const createTaskModal = document.getElementById("createTaskModal") as HTMLDivElement;
    const taskTitle = document.getElementById("taskTitle") as HTMLInputElement;
    const taskDescription = document.getElementById("taskDescription") as HTMLTextAreaElement;
    const taskPriority = document.getElementById("taskPriority") as HTMLSelectElement;
    const taskDueDate = document.getElementById("dueDate") as HTMLInputElement;

    if(taskTitle.value.trim() === "" || taskDescription.value.trim() === "" || taskPriority.value.trim() === "" || taskDueDate.value.trim() === "") {
        alert("All fields are required!");
        return;
    }

    const now = new Date();
    const dueComparedDate = new Date(taskDueDate.value);

    if(dueComparedDate < now) {
        alert("Due date must be in future!");
        return;
    }

    const task: Item = {
        id: tasks.length + 1,
        title: taskTitle.value,
        description: taskDescription.value,
        priority: taskPriority.value,
        due_date: taskDueDate.value
    }

    tasks.push(task);
    showTasks(tasks);
    
    createTaskModal.classList.add("hidden");
}); 

