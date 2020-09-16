import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moneyDots from '../helper/moneyDots';

class ListIncome extends Component {
  constructor() {
    super()

    this._deleteIncome = this._deleteIncome.bind(this);
  }

  componentDidMount() {
    this.props.getIncome()
  };

  _deleteIncome(id) {
    this.props.deleteIncome(id);
    this.props.getIncome()
  };

  _onClickOption(id) {
    const settingButton = document.getElementById(`${id}`);

    if(settingButton.style.display === 'none') {
      settingButton.style.display = 'block';
    } else {
      settingButton.style.display = 'none';
    }
  }

  _renderList() {
    return this.props.incomes.map(income => {
      return (
        <div key={income._id} className="history-content">
          <div className="history-content-title">
            <div>
              <span>{income.incomeName}</span>
            </div>
            <div className="history-content-date">
              <span>{income.incomeDate}</span>
            </div>
          </div>
          <div className="history-content-balance">
            Rp. {moneyDots(income.incomeNominal)}
          </div>
          <div className="setting-box">
            <div>
              <button className="btn-option" onClick={() => this._onClickOption(income._id)}>:</button>
              <div id={income._id} className="setting-option">
                <div className="option">
                  <button>Update</button>
                  <button onClick={() => { this._deleteIncome(income._id) }}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="history-box">
        {this._renderList()}
      </div>
    )
  }
}

export default connect(({ incomes }) => ({ incomes }), actions)(ListIncome);