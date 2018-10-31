import { Request } from 'express';
import { TransactionModel } from '../models/Transaction.model';
import { UserModel } from '../models/User.model';
import * as storageService from '../services/storage.service';
import { PaymentModel } from '../models/Payment.model';
import { Dictionary, MappedError } from 'express-validator/shared-typings';

export const createTransaction = (user: UserModel, type: string, payment: PaymentModel): Promise<TransactionModel> => {
    /*Here is a Promise because validations of transaction probably be async*/
    return new Promise((resolve, reject) => {
        if (payment.amount <= user.balance) {
            const transaction: TransactionModel = {
                userId: user.id,
                userFullName: `${user.first_name} ${user.last_name || ''}`.trim(),
                cardHolderName: payment.holder_name,
                type,
                amount: payment.amount,
                status: 'payed',
            };

            storageService.updateUser({...user, ...{balance: user.balance - payment.amount}});
            resolve(storageService.addTransaction(transaction));
        } else {
            reject('Not enough money');
        }
    });
};

export const validateTransaction = (req: Request): Dictionary<MappedError> | MappedError[] => {
    req.assert('card_number', 'This card is invalid').isCreditCard();
    req.assert('holder_name', 'Holder name is invalid').not().isEmpty();
    req.assert('expire_month', 'Expire month is invalid').isNumeric().isLength({min: 1, max: 2});
    req.assert('expire_year', 'Expire year is invalid').isNumeric().isLength({min: 4, max: 4});
    req.assert('cvv', 'CVV is invalid').isLength({min: 3});
    req.assert('amount', 'Amount is invalid').isInt({min: 1});

    req.sanitize('card_number').toInt();
    req.sanitize('expire_month').toInt();
    req.sanitize('expire_year').toInt();
    req.sanitize('cvv').toInt();
    req.sanitize('amount').toInt();

    return req.validationErrors();
};