import { TransactionModel } from '../models/Transaction.model';
import { UserModel } from '../models/User.model';
import * as storageService from '../services/storage.service';
import { PaymentModel } from '../models/Payment.model';

export const createTransaction = (user: UserModel, type: string, payment: PaymentModel): Promise<number> => {
    /*Here is a Promise because validations of transaction probably be async*/
    return new Promise((resolve, reject) => {
        if (payment.amount > user.balance) {
            reject('Not enough money');
        }
        const transaction: TransactionModel = {
            userId: user.id,
            userName: user.name,
            type,
            amount: payment.amount,
            description: `Payment type - ${type}`,
        };

        resolve(storageService.addTransaction(transaction));
    });
};