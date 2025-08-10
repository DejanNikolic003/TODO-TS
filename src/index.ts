import type { Item } from "./interfaces/Item";
import { getAllTasks, showTasks } from "./models/tasks";

const tasksList = document.getElementById("taskList") as HTMLDivElement;

const tasks: Item[] = await getAllTasks();

showTasks(tasks);