import axios from 'axios';
import {push} from "react-router-redux";

export enum DonateActionTypes {
  MakeDonate = '[Donate] Make Donate',
  MadeDonate = '[Donate] Made Donate',
}

export function makeDonate(donateData: any): any {
  return (dispatch: any): void => {
    dispatch({type: DonateActionTypes.MakeDonate});

    axios.post('http://localhost:3000/api/transactions', donateData)
      .then(response => dispatch({type: DonateActionTypes.MadeDonate, payload: response.data}))
      .then(() => dispatch(push('/transactions')));
  }
}
