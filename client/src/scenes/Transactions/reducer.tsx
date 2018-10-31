import { TransactionActionTypes } from './actions'

export interface State {
  list: TransactionInterface[];
}

export const initialState: State = {
  list: [],
};

export default (
  state = initialState,
  action: any,
): State => {
  switch (action.type) {
    case TransactionActionTypes.FetchedTransactionsList:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
