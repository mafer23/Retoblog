import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entity/User";
import { isNotEmpty, validate } from "class-validator";

export class UserController {

    static getAll = async (req: Request, res: Response ) => {
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        
        if(users.length > 0 ){
            res.send(users);
        } else {
            res.status(404).json({message: 'Not result'});
        }
    }

    static getById = async (req: Request, res:Response) => {
        const {id} = req.params;
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        } catch (error) {
            res.status(404).json({ message: 'No result'});
        }
    }

    static newUser = async (req: Request, res: Response) => {
        const { username, password, role , age } = req.body;
        const user = new User();

        user.username = username;
        user.password = password;
        user.role = role;
        user.age = age;
        

        // Validate
        const errors = await validate(user);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        if(user.age >= 18  ){
            const userRepository = getRepository(User)
            try {
                
                await userRepository.save(user);

            } catch (e) {
                return res.status(409).json({ message: 'Username already exist'});
            }
            // All ok
            res.send('User created');
        } else{

            res.send('You cannot register you must be of legal age ')
        }


    }

   
}

export default UserController