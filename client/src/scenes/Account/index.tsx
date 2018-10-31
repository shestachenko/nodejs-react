import * as React from 'react';
import AccountForm from './components/AccountForm';
import {Values} from 'redux-form-website-template';
import {connect} from "react-redux";
import {fetchUserAccount, updateUserAccount} from './actions'

class Account extends React.Component<any> {
  public componentDidMount() {
    this.props.fetchUserAccount();
  }

  public render() {
    return (
      <div>
        <h2>User Account</h2>
        <AccountForm onSubmit={this.props.updateUserAccount} initialValues={this.props.user}/>
        <Values form="MaterialUiForm"/>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    user: state.account.data
  }),
  {fetchUserAccount, updateUserAccount}
)(Account);
