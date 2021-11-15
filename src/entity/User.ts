import {Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn} from "typeorm";
import { MinLength, IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(20)
    username: string;

    @Column()
    @MinLength(6)
    password: string;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @IsNotEmpty()
    age:number;

    

   
}
