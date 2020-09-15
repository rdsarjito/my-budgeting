import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListIncome from './ListIncome';
import IncomeBalance from './IncomeBalance';

class Income extends Component {
  render() {
    return (
      <div className="income">
        <IncomeBalance />
        <ListIncome />
        <Link to={"/income/add-income"}>
          <button className="btn-add-income"><span className="add-icon">+</span></button>
        </Link>
      </div>
    )
  }
}

export default Income;