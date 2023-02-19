import { CreateTodoTdo } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { Todo } from 'src/todo/todo';
export declare class TodoModuleService {
    uuid: any;
    constructor();
    private todos;
    createTodo(data: CreateTodoTdo): Todo;
    getAll(): Array<Todo>;
    getById(id: string): Todo | undefined;
    deleteById(id: string): Todo | undefined;
    updateTodo(data: UpdateTodoTdo): Todo;
}
