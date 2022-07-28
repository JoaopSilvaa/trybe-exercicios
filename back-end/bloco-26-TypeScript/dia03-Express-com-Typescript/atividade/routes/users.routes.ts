import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validationUser from '../middlewares/users.middleware';

const router = Router();

const userController = new UserController();


router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', validationUser, userController.create);
router.put('/users/:id', validationUser, userController.update);
router.delete('/users/:id', userController.remove);

export default router;