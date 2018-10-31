import * as React from 'react';
import {Values} from 'redux-form-website-template';
import TransactionGrid from './components/TransactionGrid';

const Account = (props: any) => {
  return (
    <div>
      <h2>Material UI Example</h2>
      <TransactionGrid/>
      <Values form="MaterialUiForm"/>
    </div>
  );
};

export default Account;
