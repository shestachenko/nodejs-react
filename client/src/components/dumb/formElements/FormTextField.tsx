import * as React from 'react';
import TextField from '@material-ui/core/TextField/TextField';

const FormTextField = (
  { input, label, meta: { touched, error }, ...custom }: any,
) => (
  <TextField
    label={label}
    placeholder={label}
    error={!!(touched && error)}
    {...input}
    {...custom} />
);

export default FormTextField;
