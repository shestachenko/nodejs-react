import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from './asyncValidate';
import validate from './validate';
import './style.css';
import FormTextField from '../../../../components/dumb/formElements/FormTextField';

const DonateForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className={'row around-xs'}>
          <Field className={'item'}
            name="holder_name"
            label="Card Holder's Name"
            component={FormTextField} />
          <Field className={'item'}
            name="card_number"
            label="Card Number"
            component={FormTextField} />
        </div>
        <div className={'row start-xs'}>
          <div className='col-xs-9'>
            <Field className={'item date'}
                   name="expire_month"
                   label="Expiry Month"
                   component={FormTextField} />
            <Field className={'item date'}
                   name="expire_year"
                   label="Expiry Year"
                   component={FormTextField} />
          </div>
          <div className='col-xs-3'>
            <Field className={'item cvv'}
                   name="cvv"
                   label="CVV"
                   component={FormTextField} />
          </div>
        </div>
        <div className={'row start-xs'}>
          <Field className={'item amount'}
                 name="amount"
                 label="Amount"
                 component={FormTextField} />
        </div>
        <div className='row-actions'>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'MaterialUiForm',
  validate,
  asyncValidate,
})(DonateForm);
