import { Request, Response } from 'express';
import * as storageService from '../services/storage.service';
import { TransactionModel } from '../models/Transaction.model';
import * as transactionService from '../services/transaction.service';

export const getAll = (req: Request, res: Response) => {
    storageService.getAllTransactions().then((transactions: TransactionModel[]) => {
        return res.status(200).json(transactions);
    }).catch((error: Error) => {
        return res.status(200).json({error});
    });
};

export const addOne = (req: Request, res: Response) => {
    req.assert('card_number', 'This card is invalid').isCreditCard();
    req.assert('expired_month', 'Expire month is invalid').isNumeric().isLength({min: 1, max: 2});
    req.assert('expired_year', 'Expire year is invalid').isNumeric().isLength({min: 4, max: 4});
    req.assert('cvc', 'CVC is invalid').isLength({min: 3});
    req.assert('amount', 'Amount is invalid').isInt({min: 1});

    const errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({errors});
    }

    transactionService.createTransaction(req.session.user, 'donate', req.body)
        .then((transactionId: number) => {
            return storageService.getTransactionById(transactionId).then((transaction: TransactionModel) => {
                return res.status(201).json(transaction);
            }).catch(err => Promise.reject(err));
        })
        .catch((error: Error) => {
            return res.status(422).json({error});
        });
};
