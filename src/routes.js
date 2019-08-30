import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/graphql', UserController.store);

export default routes;
