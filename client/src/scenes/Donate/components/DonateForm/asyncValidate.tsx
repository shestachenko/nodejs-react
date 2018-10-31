import axios from 'axios';

export default (function asyncValidate(values: any /*, dispatch */) {
  return axios.post('http://localhost:3000/api/transactions/validate', values).then((result: any) => {
    if(result.data) {
      throw [...result.data.errors].reduce(
        (accumulator: any, error: any) => ({...accumulator, ...{[error.param]: error.msg}}),
        {}
      );
    }
  });
});
