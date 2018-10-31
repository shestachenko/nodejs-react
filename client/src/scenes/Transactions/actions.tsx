import axios from 'axios';

export enum TransactionActionTypes {
  FetchTransactionsList = '[Transactions] Fetch Transactions List',
  FetchedTransactionsList = '[Transactions] Fetched Transactions List',
}

export function fetchTransactionsList(donateData: any): any {
  return (dispatch: any): void => {
    dispatch({type: TransactionActionTypes.FetchTransactionsList});

    axios.get('http://localhost:3000/api/transactions', donateData)
      .then(response => dispatch({type: TransactionActionTypes.FetchedTransactionsList, payload: response.data}));
  }
}
