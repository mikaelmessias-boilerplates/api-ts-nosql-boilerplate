import express from 'express';
import UserController from './controllers/UserController';

const userController = new UserController();

const routes = express.Router();

routes.get('/users', userController.index);
routes.get('/user/:userId', userController.show);
routes.post('/user', userController.store);

export default routes;
