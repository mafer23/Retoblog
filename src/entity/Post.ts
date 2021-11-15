import {Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { MinLength, IsNotEmpty } from 'class-validator';
import {User} from "./User"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    title: string;

    @Column()
    @IsNotEmpty()
    description: string;

    @Column({ name: 'publicDate', type: 'date' }) 
    publicDate: Date;


    

   

}