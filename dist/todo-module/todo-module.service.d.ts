import { CreateTodoDto } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import TodoEntity from 'src/entities/TodoEntity';
import { Todo } from 'src/todo/todo';
import { Repository } from 'typeorm';
export declare class TodoModuleService {
    private readonly todoRepository;
    uuid: any;
    constructor(todoRepository: Repository<TodoEntity>);
    private todos;
    createTodo(data: CreateTodoDto): Todo;
    createTodoDb(data: CreateTodoDto): Todo;
    getAll(): Array<Todo>;
    getById(id: string): Todo | undefined;
    deleteById(id: string): Todo;
    deleteByIdDb(id: string): Promise<import("typeorm").UpdateResult>;
    updateTodo(data: UpdateTodoTdo): Todo;
    updateTodoDb(data: UpdateTodoTdo): Promise<TodoEntity>;
}
