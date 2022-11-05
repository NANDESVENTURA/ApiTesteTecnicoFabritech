import { Router } from 'express';
import UserController from './app/controllers/UserController';
import ClientController from './app/controllers/ClientController';
import AuthController from './app/controllers/AuthController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user',UserController.create);
routes.post('/auth',AuthController.auth);

routes.use(authMiddleware);
routes.get('/client',ClientController.listAllClients);
routes.get('/client/:id',ClientController.getClientById);
routes.post('/client',ClientController.customerRegistration);
routes.put('/client/:id',ClientController.updateClient);
routes.delete('/client/:id',ClientController.deleteClient);



export default routes;
