import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user',UserController.create);

export default routes;
