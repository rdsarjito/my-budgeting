import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import arrow from '../img/back-arrow.png'

class AddIncome extends Component {
  constructor() {
    super();

    this.state = {
      incomeName: '',
      incomeNominal: ''
    };
    this._onChangeInputIncomeName = this._onChangeInputIncomeName.bind(this);
    this._onChangeInputIncomeNominal = this._onChangeInputIncomeNominal.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChangeInputIncomeName(e) {
    this.setState({ incomeName: e.target.value });
  }

  _onChangeInputIncomeNominal(e) {
    this.setState({ incomeNominal: e.target.value });
  }

  _onSubmit(e) {
    e.preventDefault();

    const dataIncome = {
      incomeName: this.state.incomeName,
      incomeNominal: this.state.incomeNominal
    };
    
    this.props.addIncome(dataIncome);
    
    this.setState({
      incomeName: '',
      incomeNominal: ''
    });
  }

  render() {
    return (
      <div className="add-income">
        <div className="title">
          <div className="title-content">
            <Link to={"/income"} className="btn-back">
              <img src={arrow} alt="back"></img>
            </Link>
            <h3 className="add-income-title">
              Add Income
            </h3>
          </div>
        </div>
        <form onSubmit={this._onSubmit} className="content">
          <div className="income-name">
            <h5>
              Income Name 
            </h5>
            <input onChange={this._onChangeInputIncomeName} className="input" value={this.state.incomeName}></input>
          </div>
          <div className="income-nominal">
            <h5>
              Income Nominal
            </h5>
            <input onChange={this._onChangeInputIncomeNominal} className="input" value={this.state.incomeNominal}></input>
          </div>
          <button>
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(AddIncome);