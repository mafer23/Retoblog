import { PostController  } from '../controller/PostController';
import { Router } from 'express';

const router = Router();


// Get all Post
router.get('/', PostController.getAll);

// // Get one Post
router.get('/:fecha', PostController.getByFecha);

// // Create a new Post
router.post('/', PostController.newPost);



export default router;