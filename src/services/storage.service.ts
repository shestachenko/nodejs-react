import { TransactionModel } from '../models/Transaction.model';

const storage: any = {
    transactions: []
};

export const addTransaction = (transaction: TransactionModel): number => {
    const lastId = storage.transactions.length ? [...storage.transactions].pop().id : 0;
    const newId = lastId + 1;

    storage.transactions.push({...transaction, ...{id: newId}});

    return newId;
};

export const getTransactionById = (id: number): Promise<TransactionModel> => {
    return new Promise((resolve, reject) => {
        const transaction = storage.transactions.filter(((transaction: TransactionModel) => transaction.id === id));

        if (!transaction) {
            reject('Transaction is not found');
        }

        resolve(transaction);
    });
};

export const getAllTransactions = (): Promise<TransactionModel[]> => {
    return new Promise((resolve, reject) => {
        resolve(storage.transactions);
    });
};