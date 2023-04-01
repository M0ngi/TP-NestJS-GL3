import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Req, Version } from '@nestjs/common';
import { CreateTodoDto } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { TodoModuleService } from './todo-module.service';

@Controller('/todo')
export class TodoModuleController {
    constructor(private todoModuleService: TodoModuleService){}

    @Get()
    getTodos(){
        return this.todoModuleService.getAll();
    }

    @Get()
    @Version("2")
    getTodosDb(){
        return this.todoModuleService.getAllDb()
    }

    @Get('/:id')
    getTodo(@Param('id') id: string){
        return this.todoModuleService.getById(id);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id: string){
        return this.todoModuleService.deleteById(id);
    }

    @Patch()
    updateTodo(@Body() body: UpdateTodoTdo){
        return this.todoModuleService.updateTodo(body);
    }

    @Version("2")
    @Patch()
    updateTodoDb(@Body() body: UpdateTodoTdo){
        return this.todoModuleService.updateTodoDb(body);
    }

    @Post()
    createTodo(@Body() body: CreateTodoDto){
        return this.todoModuleService.createTodo(body);
    }

    @Version("2")
    @Post()
    createTodoDb(@Body() body: CreateTodoDto){
        return this.todoModuleService.createTodoDb(body);
    }

    @Get("/stats")
    @Version("2")
    getStatsTodo(){
        return this.todoModuleService.getStats();
    }

    @Get('/:id')
    @Version("2")
    getTodoDb(@Param('id') id: string){
        return this.todoModuleService.getByIdDb(id);
    }

    @Delete('/:id')
    @Version("2")
    deleteTodoDb(@Param('id') id: string){
        return this.todoModuleService.deleteByIdDb(id);
    }

    @Version("2")
    @Post("/restore/:id")
    restoreTodoDb(@Param('id') id: string){
        return this.todoModuleService.restoreById(id)
    }
}
