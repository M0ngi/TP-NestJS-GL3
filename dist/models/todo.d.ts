export declare class TodoModel {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    status: TodoStatusEnum;
}
export declare enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalis\u00E9"
}
