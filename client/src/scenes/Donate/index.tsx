import * as React from 'react';
import {connect} from 'react-redux';
import {makeDonate} from './actions'
import DonateForm from './components/DonateForm';
import './style.css';

class Donate extends React.Component<any> {
  public render() {
    return (
      <div className={'page-donate'}>
        <h2>Donate Form</h2>
        <DonateForm onSubmit={this.props.makeDonate} initialValues={{card_number: '4801625851250388'}} />
      </div>
    );
  }
}

export default connect(
  null,
  {makeDonate}
)(Donate);
