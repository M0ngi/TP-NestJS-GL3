import { Cv } from "src/cvs/entities/cv.entity";
import { Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class Skill {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar"
    })
    designation: string;

    @ManyToMany(type => Cv)
    cvs: Cv[]
}
