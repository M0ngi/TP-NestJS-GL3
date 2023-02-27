import { TodoStatusEnum } from "src/todo/todo";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("tdo")
export default class TodoEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "string"
    })
    name: string;

    @Column({
        type: "string"
    })
    description: string;

    @CreateDateColumn({
        update: false
    })
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type: "enum",
        enum: TodoStatusEnum,
        default: TodoStatusEnum.waiting
    })
    status: TodoStatusEnum;
}