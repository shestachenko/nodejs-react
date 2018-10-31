import * as React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import logo from './logo.svg';
import Account from './scenes/Account';
import Transactions from './scenes/Transactions';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <article>
            <Switch>
              <Route path='/account' component={Account} />
              <Route path='/transactions' component={Transactions} />
            </Switch>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
