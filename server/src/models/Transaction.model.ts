export type TransactionModel = {
  id?: number,
  userId: number,
  userFullName: string,
  cardHolderName: string,
  type: string,
  amount: number,
  status: string,
};
