import { Todo, TodoId } from "./todo.type";

export async function getTodo(id: TodoId): Promise<Todo | undefined> {
}

export async function getTodos(): Promise<Todo[]> {
}

export async function createTodo(todo: Todo): Promise<Todo> {
}

export async function updateTodo(id: TodoId, todo: Todo): Promise<Todo> {
}

export async function deleteTodo(id: TodoId): Promise<void> {
}