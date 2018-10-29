import express from 'express';
import * as controller from '../controllers/transaction.controller';

const transactionRouter = express.Router();

transactionRouter.get('/', controller.getAll);
transactionRouter.post('/', controller.addOne);

export default transactionRouter;