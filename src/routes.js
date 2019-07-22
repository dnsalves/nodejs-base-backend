import { Router } from 'express';

import authMiddleware from './app/middleware/auth';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/route_name_without_auth', SessionController.store);

routes.use(authMiddleware);

routes.post('/route_name_with_auth', SessionController.store);

export default routes;
