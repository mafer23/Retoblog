import { Router } from 'express';

import auth from './auth'
import user from './user'
import posts from './posts'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/publication', posts);



export default routes;