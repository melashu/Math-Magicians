import React, { Component } from 'react';
import Result from './Result';
import Table from './Table';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <Result result={result} />
        <Table />
      </div>
    );
  }
}

export default Calculator;
