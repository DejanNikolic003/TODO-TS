import type { Item } from "../interfaces/Item";

export const getAllTasks = async (): Promise<Item[]> => {
    try {
        const response = await fetch("data/tasks.json");
        const result = await response.json();

        return result;
    } catch (error) {
        console.error(error);
    }

    return [];
};

export const showTasks = (tasks: Item[]): void => {
    const taskList = document.getElementById("taskList") as HTMLDivElement;

    tasks.forEach(task => {
        const taskDiv: HTMLDivElement = document.createElement("div");
        const taskHeading: HTMLHeadingElement = document.createElement("h2");
        const taskDescription: HTMLParagraphElement = document.createElement("p");
        const taskPriority: HTMLParagraphElement = document.createElement("p");
        const taskDueDate: HTMLParagraphElement = document.createElement("p");

        taskHeading.textContent = task.title;
        taskDescription.textContent = task.description;
        taskPriority.textContent = task.priority;
        taskDueDate.textContent = task.due_date;        
        
        taskDiv.append(taskHeading, taskDescription, taskPriority, taskDueDate);
        taskList.append(taskDiv);
    });
}
