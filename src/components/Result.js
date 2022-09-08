import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <>
        <h2 className="title">Your Math Calculator</h2>
        <div className="result-container">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
      </>
    );
  }
}
// Result.propTypes = {
//   result: PropTypes.number,
// };

// Result.defaultProps = {
//   result: 0,
// };
export default Result;
