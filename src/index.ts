import type { Item } from "./interfaces/Item";
import { getAllTasks } from "./models/tasks";

const tasksList = document.getElementById("taskList") as HTMLDivElement;

const tasks: Item[] = await getAllTasks();

document.addEventListener("DOMContentLoaded", () => {
    
});
