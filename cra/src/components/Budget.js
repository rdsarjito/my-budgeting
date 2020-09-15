import React, { Component } from 'react';

class Budget extends Component {
  render() {
    return (
      <div>
        <div className="budget">
          <div className="budget-title">
            <span>Current Budget</span>
          </div>
          <div className="budget-balance">
            <span>Rp. 1.000.000.000</span>
          </div>
          <div className="inc-exp-total-box">
            <div className="inc-exp-total">
              <div className="inc-total">
                <div className="inc-title">
                  <span>Income</span>
                </div>
                <div className="inc-balance">
                  <span>Rp. 500.000.000</span>
                </div>
                <div className="inc-add">
                  <span>+ Add Income</span>
                </div>
              </div>
              <span className="mid-border"></span>
              <div className="exp-total">
                <div className="exp-title">
                  <span>Expense</span>
                </div>
                <div className="exp-balance">
                  <span>Rp. 200.000.000</span>
                </div>
                <div className="exp-add">
                  <span>+ Add Expense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="history">
          <div className="history-header">
            <div className="history-title">
              Income
            </div>
            <div className="history-all">
              See all
            </div>
          </div>
          <div className="history-content">
            <div className="history-content-image">
              Image
            </div>
            <div className="history-content-title">
              <div>
                <span>Monthly Salary</span>
              </div>
              <div>
                <span>12-03-2020</span>
              </div>
            </div>
            <div className="history-content-balance">
              Rp. 1.200.000
            </div>
          </div>
            <div className="history-header">
              <div className="history-title">
                Expense
              </div>
              <div className="history-all">
                See all
              </div>
            </div>
            <div className="history-content">
              <div className="history-content-image">
                Image
              </div>
              <div className="history-content-title">
                <div>
                  <span>Monthly Salary</span>
                </div>
                <div>
                  <span>12-03-2020</span>
                </div>
              </div>
              <div className="history-content-balance">
                Rp. 1.200.000
              </div>
            </div>
        </div>
      </div>
    );
  };
};

export default Budget;