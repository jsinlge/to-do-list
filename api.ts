import { ITask } from "./types/tasks";
import todos from "./app/component/data/todos.json";

const baseUrl = 'http://localhost:3000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    console.log(todos);
    return todos.tasks;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}