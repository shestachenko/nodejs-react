import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from './asyncValidate';
import validate from './validate';
import '../../style.css';
import FormTextField from "../../../../components/dumb/formElements/FormTextField";

const AccountForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className={'row around-xs'}>
          <Field className={'item'}
            name="first_name"
            label="First Name"
            component={FormTextField} />
          <Field className={'item'}
            name="last_name"
            label="Last name"
            component={FormTextField} />
        </div>
        <div className={'row around-xs'}>
          <Field className={'item'}
                 name="email"
                 label="Email"
                 component={FormTextField} />
          <Field className={'item'}
                 name="balance"
                 label="Farm balance"
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
  form: 'AccountForm',
  validate,
  asyncValidate,
})(AccountForm);
