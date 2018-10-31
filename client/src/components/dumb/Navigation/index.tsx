import * as React from 'react';
import {Link} from "react-router-dom";
import './style.css';

class Navigation extends React.Component<any> {
  public render() {
    return (
      <ul>
        <li><Link to="/">Account</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
      </ul>
    );
  }
}

export default Navigation;
