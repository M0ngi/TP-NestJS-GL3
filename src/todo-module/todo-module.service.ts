import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { IT } from 'src/injection-token';
import { Todo, TodoStatusEnum } from 'src/todo/todo';

@Injectable()
export class TodoModuleService {
    @Inject(IT.COMMON_MODULE) uuid;
    constructor(){}

    private todos: Array<Todo> = [];

    createTodo(data: CreateTodoDto): Todo{
        const todo: Todo = new Todo();
        
        todo.id = this.uuid();
        todo.name = data.name ?? "";
        todo.description = data.description ?? "";
        todo.createdAt = new Date();
        todo.status = TodoStatusEnum.waiting;
        this.todos.push(todo)
        return todo;
    }

    getAll(): Array<Todo> {
        return this.todos
    }

    getById(id: string): Todo|undefined {
        return this.todos.find((e) => e.id == id);
    }

    deleteById(id: string): Todo|undefined {
        const idx = this.todos.findIndex((e) => e.id == id);
        if(idx == -1) return undefined;

        return this.todos.splice(idx, 1)[0];
    }

    updateTodo(data: UpdateTodoTdo){
        const todo: Todo = new Todo();
        const idx = this.todos.findIndex((e) => e.id == data.id);

        todo.id = data.id;
        todo.name = data.name ?? this.todos[idx].name;
        todo.description = data.description ?? this.todos[idx].description;
        todo.status = data.status ?? this.todos[idx].status;

        this.todos.splice(idx, 1, todo);
        return todo;
    }
}
