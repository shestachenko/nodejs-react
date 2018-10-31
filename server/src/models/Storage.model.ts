import { TransactionModel } from './Transaction.model';
import { UserModel } from './User.model';

export type StorageModel = {
  transactions: TransactionModel[],
  user: UserModel,
};
