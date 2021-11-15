import {Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { MinLength, IsNotEmpty } from 'class-validator';
import {User} from "./User"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(20)
    @IsNotEmpty()
    title: string;

    @Column()
    @MinLength(50)
    @IsNotEmpty()
    description: string;

    @Column({ name: 'publicDate', type: 'date' }) 
    publicDate: Date;


    

   

}