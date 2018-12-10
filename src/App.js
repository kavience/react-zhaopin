import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './container/login/login.js';
import Register from './container/register/register.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path='' exact component={Login}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
