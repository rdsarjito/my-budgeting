import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moneyDots from '../helper/moneyDots';

class ListIncome extends Component {
  componentDidMount() {
    this.props.fetchIncome()
  }
  _renderList() {
    return this.props.incomes.map(income => {
      return (
        <div key={income._id} className="history-content">
          <div className="history-content-title">
            <div>
              <span>{income.incomeName}</span>
            </div>
            <div>
              <span>12-03-2020</span>
            </div>
          </div>
          <div className="history-content-balance">
            Rp. {moneyDots(income.incomeNominal)}
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="history-box">
        {this._renderList()}
      </div>
    )
  }
}

export default connect(({ incomes }) => ({ incomes }), actions)(ListIncome);