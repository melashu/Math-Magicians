import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const caller = this.props;
    caller.onClickHndler(e.target.id);
  }

  render() {
    return (
      <div className="table">
        <div className="table-row">
          <button
            type="button"
            onClick={this.clickHandler}
            id="AC"
          >
            AC
          </button>
          <button type="button" id="+/-" onClick={this.clickHandler}>
            +/-
          </button>
          <button type="button" onClick={this.clickHandler} id="%">
            %
          </button>
          <button type="button" onClick={this.clickHandler} id="+">
            +
          </button>
        </div>

        <div className="table-row">
          <button type="button" id="7" onClick={this.clickHandler}>
            7
          </button>
          <button type="button" id="8" onClick={this.clickHandler}>
            8
          </button>
          <button type="button" id="9" onClick={this.clickHandler}>
            9
          </button>
          <button type="button" id="x" onClick={this.clickHandler}>
            x
          </button>
        </div>
        <div className="table-row">
          <button type="button" id="4" onClick={this.clickHandler}>
            4
          </button>
          <button type="button" id="5" onClick={this.clickHandler}>
            5
          </button>
          <button type="button" id="6" onClick={this.clickHandler}>
            6
          </button>
          <button type="button" id="-" onClick={this.clickHandler}>
            -
          </button>
        </div>
        <div className="table-row">
          <button type="button" id="1" onClick={this.clickHandler}>
            1
          </button>
          <button type="button" id="2" onClick={this.clickHandler}>
            2
          </button>
          <button type="button" id="3" onClick={this.clickHandler}>
            3
          </button>
          <button type="button" id="÷" onClick={this.clickHandler}>
            ÷
          </button>
        </div>
        <div className="table-row5">
          <button type="button" id="0" onClick={this.clickHandler}>
            0
          </button>
          <button type="button" id="." onClick={this.clickHandler}>
            .
          </button>
          <button type="button" id="=" onClick={this.clickHandler}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Table;
