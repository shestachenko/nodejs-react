import axios from 'axios';

export enum AccountActionTypes {
  FetchUserAccount = '[Account] Fetch User Account',
  FetchedUserAccount = '[Account] Fetched User Account',
  UpdateUserAccount = '[Account] Update User Account',
  UpdatedUserAccount = '[Account] Updated User Account',
}

export function fetchUserAccount(): any {
  return (dispatch: any): void => {
    dispatch({type: AccountActionTypes.FetchUserAccount});

    axios.get('http://localhost:3000/api/user')
      .then(response => dispatch({type: AccountActionTypes.FetchedUserAccount, payload: response.data}));
  }
}

export function updateUserAccount(accountData: AccountInterface): any {
  return (dispatch: any): void => {
    dispatch({type: AccountActionTypes.UpdateUserAccount});

    axios.put('http://localhost:3000/api/user', accountData)
      .then(() => dispatch({type: AccountActionTypes.UpdatedUserAccount, payload: accountData}));
  }
}
