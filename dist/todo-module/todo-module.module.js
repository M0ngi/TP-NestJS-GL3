"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModuleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const TodoEntity_1 = require("../entities/TodoEntity");
const todo_module_controller_1 = require("./todo-module.controller");
const todo_module_service_1 = require("./todo-module.service");
let TodoModuleModule = class TodoModuleModule {
};
TodoModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([TodoEntity_1.default])
        ],
        controllers: [todo_module_controller_1.TodoModuleController],
        providers: [todo_module_service_1.TodoModuleService]
    })
], TodoModuleModule);
exports.TodoModuleModule = TodoModuleModule;
//# sourceMappingURL=todo-module.module.js.map