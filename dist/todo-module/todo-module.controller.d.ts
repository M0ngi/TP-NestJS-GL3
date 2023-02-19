import { CreateTodoTdo } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { TodoModuleService } from './todo-module.service';
export declare class TodoModuleController {
    private todoModuleService;
    constructor(todoModuleService: TodoModuleService);
    getTodos(): import("../todo/todo").Todo[];
    getTodo(id: string): import("../todo/todo").Todo;
    deleteTodo(id: string): import("../todo/todo").Todo;
    updateTodo(body: UpdateTodoTdo): import("../todo/todo").Todo;
    createTodo(body: CreateTodoTdo): import("../todo/todo").Todo;
}
