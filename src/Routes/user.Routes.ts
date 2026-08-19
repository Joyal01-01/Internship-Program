
import { Router } from 'express';
import { UserController } from '../Controller/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { validateRequest } from '../middleware/validRequest.middleware';
import { createUserSchema } from '../validation/user.validation';

const router = Router();

router.post('/user', authMiddleware, createUserSchema, validateRequest, UserController.createUser)
router.get('/user', UserController.getUsers)
router.get('/user/:id', UserController.getUserByID)
router.delete('/user/:id', UserController.deleteUserByID)
router.put('/user/:id', UserController.updateUser)
router.patch('/user/:id', UserController.patchUser)
router.post('/login', UserController.login)
router.post('/contact-us', UserController.contactUs)

export default router;

