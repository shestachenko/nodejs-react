import { Request, Response } from 'express';
import * as storageService from '../services/storage.service';
import { TransactionModel } from '../models/Transaction.model';
import * as transactionService from '../services/transaction.service';
import { UserModel } from '../models/User.model';

export const getAll = (req: Request, res: Response) => {
    storageService.getAllTransactions()
        .then((transactions: TransactionModel[]) => res.status(200).json(transactions))
        .catch((error: Error) => res.status(200).json({error}));
};

export const addOne = (req: Request, res: Response) => {
    const errors = transactionService.validateTransaction(req);

    if (errors) {
        return res.status(422).json({errors});
    }

    const user: Promise<UserModel> = storageService.getUserById(req.session.user.id);

    const transaction: Promise<TransactionModel> = user.then((user: UserModel) =>
        transactionService.createTransaction(user, 'donate', req.body));

    Promise.all([user, transaction]).then(([user, transaction]: [UserModel, TransactionModel]) => {
        storageService.updateUser({...user, ...{balance: user.balance - transaction.amount}});
        res.status(201).json(transaction);
    }).catch((error: Error) => res.status(422).json({error}));
};

export const validate = (req: Request, res: Response) => {
    const errors = transactionService.validateTransaction(req);

    if (errors) {
        return res.status(200).json({errors});
    }

    return res.status(200).end();
};
