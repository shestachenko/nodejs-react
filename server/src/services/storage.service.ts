import { TransactionModel } from '../models/Transaction.model';
import { UserModel } from '../models/User.model';
import { StorageModel } from '../models/Storage.model';

const storage: StorageModel = {
    transactions: [],
    user: {id: 21, email: 'elon@musk.com'}
};

export const addTransaction = (transaction: TransactionModel): Promise<TransactionModel> => {
    return new Promise((resolve) => {
        const {transactions} = storage;

        const lastId = transactions.length ? transactions[transactions.length - 1].id : 0;
        const newId = lastId + 1;
        const newTransaction = {...transaction, ...{id: newId}};

        transactions.push(newTransaction);

        resolve(newTransaction);
    });
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
    return Promise.resolve(storage.transactions.sort((a, b) => b.id - a.id));

//    return new Promise((resolve, reject) => {
//        resolve(storage.transactions.sort((a, b) => b.id - a.id));
//    });
};

export const getUserById = (id: number): Promise<UserModel> => {
    return Promise.resolve(storage.user);

//    return new Promise((resolve: any) => {
//
//        resolve(storage.user);
//    });
};

export const updateUser = (user: UserModel): Promise<UserModel> => {
    return new Promise((resolve) => {
        storage.user = {...storage.user, ...user};

        resolve(storage.user);
    });
};