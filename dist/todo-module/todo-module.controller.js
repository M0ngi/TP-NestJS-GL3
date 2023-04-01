"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModuleController = void 0;
const common_1 = require("@nestjs/common");
const create_todo_1 = require("../DTO/create-todo");
const update_todo_1 = require("../DTO/update-todo");
const todo_module_service_1 = require("./todo-module.service");
let TodoModuleController = class TodoModuleController {
    constructor(todoModuleService) {
        this.todoModuleService = todoModuleService;
    }
    getTodos() {
        return this.todoModuleService.getAll();
    }
    getTodosDb() {
        return this.todoModuleService.getAllDb();
    }
    getTodo(id) {
        return this.todoModuleService.getById(id);
    }
    deleteTodo(id) {
        return this.todoModuleService.deleteById(id);
    }
    updateTodo(body) {
        return this.todoModuleService.updateTodo(body);
    }
    createTodo(body) {
        return this.todoModuleService.createTodo(body);
    }
    createTodoDb(body) {
        return this.todoModuleService.createTodoDb(body);
    }
    getStatsTodo() {
        return this.todoModuleService.getStats();
    }
    getTodoDb(id) {
        return this.todoModuleService.getByIdDb(id);
    }
    deleteTodoDb(id) {
        return this.todoModuleService.deleteByIdDb(id);
    }
    restoreTodoDb(id) {
        return this.todoModuleService.restoreById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)("2"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "getTodosDb", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "deleteTodo", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_1.UpdateTodoTdo]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_1.CreateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Version)("2"),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_1.CreateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "createTodoDb", null);
__decorate([
    (0, common_1.Get)("/stats"),
    (0, common_1.Version)("2"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "getStatsTodo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.Version)("2"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "getTodoDb", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.Version)("2"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "deleteTodoDb", null);
__decorate([
    (0, common_1.Version)("2"),
    (0, common_1.Post)("/restore/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoModuleController.prototype, "restoreTodoDb", null);
TodoModuleController = __decorate([
    (0, common_1.Controller)('/todo'),
    __metadata("design:paramtypes", [todo_module_service_1.TodoModuleService])
], TodoModuleController);
exports.TodoModuleController = TodoModuleController;
//# sourceMappingURL=todo-module.controller.js.map