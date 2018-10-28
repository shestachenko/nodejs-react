import express from 'express';
import * as controller from '../controllers/user.controller';

const userRoutes = express.Router();

userRoutes.get('/', controller.getCurrentUser);
userRoutes.put('/', controller.updateCurrentUser);

export default userRoutes;