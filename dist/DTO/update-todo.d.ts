import { TodoStatusEnum } from "src/todo/todo";
import { CreateTodoDto } from "./create-todo";
declare const UpdateTodoTdo_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTodoDto>>;
export declare class UpdateTodoTdo extends UpdateTodoTdo_base {
    id: string;
    status?: TodoStatusEnum;
}
export {};
