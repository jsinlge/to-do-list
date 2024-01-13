import { ITask } from "./types/tasks";
import todos from "./app/component/data/todos.json";

const baseUrl = 'http://localhost:3000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    // console.log(todos);
    return todos.tasks;
}

export const addTodo = async (todo: ITask) => {
    console.log(todo)
    const newtask=todos;
    newtask.tasks.push(todo)
    console.log(newtask)
    return newtask
}