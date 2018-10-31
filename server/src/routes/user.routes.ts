import express from 'express';
import * as controller from '../controllers/user.controller';

const userRoutes = express.Router();

userRoutes.get('/', controller.getCurrentUser);
userRoutes.put('/', controller.updateCurrentUser);
userRoutes.post('/validate', controller.validate);

export default userRoutes;