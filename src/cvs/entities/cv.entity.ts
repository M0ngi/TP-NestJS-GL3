import { Skill } from "src/skills/entities/skill.entity";
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class Cv {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar"
    })
    name: string;
    
    @Column({
        type: "varchar"
    })
    firstname: string;

    @Column({
        type: "int"
    })
    age: number;

    @Column({
        type: "varchar"
    })
    cin: string;

    @Column({
        type: "varchar"
    })
    job: string;

    @Column({
        type: "varchar"
    })
    path: string;

    @ManyToMany(type => Skill, skill => skill.cvs, { eager: true })
    @JoinTable()
    skills: Skill[];
}
