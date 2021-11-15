import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Post} from "../entity/Post";
import { validate } from "class-validator";

export class PostController {

    static getAll = async (req: Request, res: Response ) => {
        const postRepository = getRepository(Post);
        const post = await postRepository.find();
        
        if(post.length > 0 ){
            res.send(post);
        } else {
            res.status(404).json({message: 'Not result'});
        }
    }

    static getByFecha = async (req: Request, res:Response) => {
        const {publicDate} = req.params;
        const postRepository = getRepository(Post);
        try {
            const user = await postRepository.findOneOrFail(publicDate);
            res.send(user);
        } catch (error) {
            res.status(404).json({ message: 'No result'});
        }
    }

    static newPost = async (req: Request, res: Response) => {
        const { title, description, publicDate } = req.body;
        const post = new Post();

        post.title = title;
        post.description = description;
        post.publicDate = publicDate;
        
        console.log(post.publicDate);


        // Validate
        const errors = await validate(post);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

      
            const userRepository = getRepository(Post)
            try {
                
                await userRepository.save(post);

            } catch (e) {
                return res.status(409).json({ message: 'Post already exist'});
            }
            // All ok
            res.send('Post created');
     


    }




}

export default PostController