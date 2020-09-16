import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListIncome from './ListIncome';
import IncomeBalance from './IncomeBalance';
import arrow from '../img/back-arrow.png'

class Income extends Component {
  render() {
    return (
      <div className="income">
        <div className="title">
          <div className="title-content">
            <Link to={"/income"} className="btn-back">
              <img src={arrow} alt="back"></img>
            </Link>
            <h3 className="add-income-title">
              Income
            </h3>
          </div>
        </div>
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