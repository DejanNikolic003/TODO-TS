import type { Item } from "../interfaces/Item";
import { formatDate } from "../utils/date";

export const showTasks = (tasks: Item[]): void => {
    const taskList = document.getElementById("taskList") as HTMLDivElement;

    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv: HTMLDivElement = document.createElement("div");
        const taskHeading: HTMLHeadingElement = document.createElement("h2");
        const taskDescription: HTMLParagraphElement = document.createElement("p");
        const taskPriority: HTMLParagraphElement = document.createElement("p");
        const taskDueDate: HTMLParagraphElement = document.createElement("p");
        const taskEditButton: HTMLButtonElement = document.createElement("button");

        const formattedDate = formatDate(task.due_date);

        taskHeading.textContent = task.title;
        taskDescription.textContent = task.description;
        taskPriority.textContent = task.priority;
        taskDueDate.textContent = formattedDate;        
        taskEditButton.textContent = "Edit";
        
        taskDiv.classList.add("flex", "items-center", "justify-between", "w-full", "p-2", "border-b-1", "border-gray-100/50", "border-dashed");
        taskEditButton.classList.add("p-2", "bg-emerald-600", "text-white", "rounded-md", "hover:bg-emerald-700", "cursor-pointer", "transition", "duration-300");

        taskDiv.append(taskHeading, taskDescription, taskPriority, taskDueDate, taskEditButton);
        taskList.append(taskDiv);
    });
}


