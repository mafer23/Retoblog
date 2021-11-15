import { UserController  } from './../controller/UserController';
import { Router } from 'express';

const router = Router();

// Get all users 
router.get('/', UserController.getAll);

// Get one user
router.get('/:id', UserController.getById);

// Create a new user
router.post('/', UserController.newUser);


export default router;
