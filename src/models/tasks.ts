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
