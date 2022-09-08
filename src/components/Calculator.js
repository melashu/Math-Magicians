import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Result from './Result';
import Table from './Table';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.onClickHndler = this.onClickHndler.bind(this);
  }

  onClickHndler(buttonName) {
    const val = calculate(this.state, buttonName);
    const { total, next, operation } = val;
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Result total={total} next={next} operation={operation} />
        <Table onClickHndler={this.onClickHndler} />
      </div>
    );
  }
}

export default Calculator;
