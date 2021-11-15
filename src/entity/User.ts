import {Entity, PrimaryGeneratedColumn, Unique, Column, OneToMany} from "typeorm";
import { MinLength, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcryptjs';


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
