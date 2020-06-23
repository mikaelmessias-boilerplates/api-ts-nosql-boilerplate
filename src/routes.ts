import express from 'express';
import UserController from './controllers/UserController';
// import multer from 'multer';
// import multerConfig from './utils/multer';

const userController = new UserController();

const routes = express.Router();

routes.get('/users', userController.index);
routes.get('/user/:userId', userController.show);
routes.post('/user', userController.store);

export default routes;
