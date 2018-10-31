import { combineReducers } from 'redux';
import account from './scenes/Account/reducer';
import transactions from './scenes/Transactions/reducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer,
  account,
  transactions,
  router: routerReducer
});
