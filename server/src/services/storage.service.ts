import { TransactionModel } from '../models/Transaction.model';
import { UserModel } from '../models/User.model';
import { StorageModel } from '../models/Storage.model';

let storage: StorageModel = {
    transactions: [],
    user: {id: 21, email: 'elon@musk.com'}
};

export const addTransaction = (transaction: TransactionModel): TransactionModel => {
    const lastId = storage.transactions.length ? [...storage.transactions].pop().id : 0;
    const newId = lastId + 1;
    const newTransaction = {...transaction, ...{id: newId}};

    storage = {
        ...storage,
        ...{transactions: [...storage.transactions, newTransaction]}
    };

    return newTransaction;
};

// export const getTransactionById = (id: number): Promise<TransactionModel> => {
//     return new Promise((resolve, reject) => {
//         const transaction = storage.transactions.find(((transaction: TransactionModel) => transaction.id === id));
//
//         if (!transaction) {
//             reject('Transaction is not found');
//         }
//
//         resolve(transaction);
//     });
// };

export const getAllTransactions = (): Promise<TransactionModel[]> => {
    return new Promise((resolve, reject) => {
        resolve(storage.transactions.reverse());
    });
};

export const getUserById = (id: number): Promise<UserModel> => {
    return new Promise((resolve: any) => {

        resolve(storage.user);
    });
};

export const updateUser = (user: UserModel): UserModel => {
    storage = {
        ...storage,
        ...{user}
    };

    return storage.user;
};