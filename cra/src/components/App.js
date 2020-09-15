import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Budget from './Budget';
import Income from './Income';
import AddIncome from './AddIncome';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Route exact={true} path="/" component={Budget} />
          <Route exact={true} path="/income" component={Income} />   
          <Route path="/income/add-income" component={AddIncome} />
        </BrowserRouter>
      </div>
    );
  };
};

export default App;