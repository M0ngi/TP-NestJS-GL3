import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar"
    })
    username: string;

    @Column({
        type: "varchar"
    })
    email: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "varchar"
    })
    hash: string;
}
