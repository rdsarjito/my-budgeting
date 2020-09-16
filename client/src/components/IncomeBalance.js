import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moneyDots from '../helper/moneyDots';

class IncomeBalance extends Component {
  componentDidMount() {
    this.props.getIncome();
  };

  render() {
    const sumIncome = this.props.incomes.reduce((tot, arr) => {
      return tot + parseInt(arr.incomeNominal);
    }, 0);
    return (
      <div className="budget budget-income">
        <div className="budget-title">
          <span>Total Income</span>
        </div>
        <div className="budget-balance">
          <span>Rp. {moneyDots(sumIncome)}</span>
        </div>
      </div>
    )
  }
}

export default connect(({ incomes }) => ({ incomes }), actions)(IncomeBalance);