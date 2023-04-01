import { CreateTodoDto } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { TodoModuleService } from './todo-module.service';
export declare class TodoModuleController {
    private todoModuleService;
    constructor(todoModuleService: TodoModuleService);
    getTodos(): import("../todo/todo").Todo[];
    getTodosDb(): Promise<import("../entities/TodoEntity").default[]>;
    getTodo(id: string): import("../todo/todo").Todo;
    deleteTodo(id: string): import("../todo/todo").Todo;
    updateTodo(body: UpdateTodoTdo): import("../todo/todo").Todo;
    createTodo(body: CreateTodoDto): import("../todo/todo").Todo;
    createTodoDb(body: CreateTodoDto): Promise<import("../entities/TodoEntity").default>;
    getStatsTodo(): Promise<{
        actif: number;
        done: number;
        waiting: number;
    }>;
    getTodoDb(id: string): Promise<import("../entities/TodoEntity").default>;
    deleteTodoDb(id: string): Promise<import("../entities/TodoEntity").default>;
    restoreTodoDb(id: string): Promise<import("typeorm").UpdateResult>;
}
