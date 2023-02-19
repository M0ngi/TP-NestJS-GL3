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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModuleService = void 0;
const common_1 = require("@nestjs/common");
const injection_token_1 = require("../injection-token");
const todo_1 = require("../todo/todo");
let TodoModuleService = class TodoModuleService {
    constructor() {
        this.todos = [];
    }
    createTodo(data) {
        var _a, _b;
        const todo = new todo_1.Todo();
        todo.id = this.uuid();
        todo.name = (_a = data.name) !== null && _a !== void 0 ? _a : "";
        todo.description = (_b = data.description) !== null && _b !== void 0 ? _b : "";
        todo.createdAt = new Date();
        todo.status = todo_1.TodoStatusEnum.waiting;
        this.todos.push(todo);
        return todo;
    }
    getAll() {
        return this.todos;
    }
    getById(id) {
        return this.todos.find((e) => e.id == id);
    }
    deleteById(id) {
        const idx = this.todos.findIndex((e) => e.id == id);
        if (idx == -1)
            return undefined;
        return this.todos.splice(idx, 1)[0];
    }
    updateTodo(data) {
        var _a, _b, _c;
        const todo = new todo_1.Todo();
        const idx = this.todos.findIndex((e) => e.id == data.id);
        todo.id = data.id;
        todo.name = (_a = data.name) !== null && _a !== void 0 ? _a : this.todos[idx].name;
        todo.description = (_b = data.description) !== null && _b !== void 0 ? _b : this.todos[idx].description;
        todo.status = (_c = data.status) !== null && _c !== void 0 ? _c : this.todos[idx].status;
        this.todos.splice(idx, 1, todo);
        return todo;
    }
};
__decorate([
    (0, common_1.Inject)(injection_token_1.IT.COMMON_MODULE),
    __metadata("design:type", Object)
], TodoModuleService.prototype, "uuid", void 0);
TodoModuleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TodoModuleService);
exports.TodoModuleService = TodoModuleService;
//# sourceMappingURL=todo-module.service.js.map