import { Router } from 'express';

import auth from './auth'
import user from './user'
import post from './post'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/post', post);



export default routes;