import * as React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import Account from './scenes/Account';
import Transactions from './scenes/Transactions';
import Donate from './scenes/Donate';
import Navigation from "./components/dumb/Navigation";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Transaction Project</h1>
        </header>
        <Navigation />
        <main>
            <Switch>
              <Route exact path='/' component={Account} />
              <Route path='/transactions' component={Transactions} />
              <Route path='/donate' component={Donate} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
