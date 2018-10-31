import * as React from 'react';
import TransactionGrid from './components/TransactionGrid';
import {connect} from 'react-redux';
import {fetchTransactionsList} from './actions';

class Account extends React.Component<any> {
  public componentDidMount(): void {
    this.props.fetchTransactionsList();
  }

  public render()  {
    return (
      <div>
        <h2>Transactions History</h2>
        {this.props.list.length ? (
          <TransactionGrid list={this.props.list}/>
        ) : (
          <p>There are no transactions...</p>
        )}
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    list: state.transactions.list
  }),
  {fetchTransactionsList}
)(Account);
