import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { result } = this.props;
    return (
      <div className="result-container">
        <p>{result}</p>
      </div>
    );
  }
}
Result.propTypes = {
  result: PropTypes.number,
};

Result.defaultProps = {
  result: 0,
};
export default Result;
