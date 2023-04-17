import { Skill } from "src/skills/entities/skill.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(
        () => UserEntity,
        (user) => user.cvs,
        {
          cascade: ['insert', 'update'],
          nullable: true,
          eager: true
        }
    )
    user: UserEntity;

    @ManyToMany(type => Skill, skill => skill.cvs, { eager: true })
    @JoinTable()
    skills: Skill[];
}
