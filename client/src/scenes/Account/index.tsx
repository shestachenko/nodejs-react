import * as React from 'react';
import AccountForm from './components/AccountForm';
import {connect} from "react-redux";
import {fetchUserAccount, updateUserAccount} from './actions'
import './style.css';

class Account extends React.Component<any> {
  public componentDidMount() {
    this.props.fetchUserAccount();
  }

  public render() {
    return (
      <div className={'page-account'}>
        <h2>User Account</h2>
        <AccountForm onSubmit={this.props.updateUserAccount} initialValues={this.props.user}/>
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
