import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from './asyncValidate';
import validate from './validate';
import TextField from "@material-ui/core/TextField";
import './style.css';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom }: any,
) => (
  <TextField
    label={label}
    placeholder={label}
    error={!!(touched && error)}
    {...input}
    {...custom} />
);

const MaterialUiForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className={'row'}>
          <Field className={'item'}
            name="first_name"
            label="First Name"
            component={renderTextField} />
          <Field className={'item'}
            name="last_name"
            label="Last name"
            component={renderTextField} />
        </div>
        <div className={'row'}>
          <Field className={'item'}
                 name="email"
                 label="Email"
                 component={renderTextField} />
          <Field className={'item'}
                 name="balance"
                 label="Farm balance"
                 component={renderTextField} />
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
})(MaterialUiForm);
