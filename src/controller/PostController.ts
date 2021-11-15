import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Post} from "../entity/Post";


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


    



}

export default PostController