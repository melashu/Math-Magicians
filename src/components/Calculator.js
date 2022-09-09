import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './Result';
import Table from './Table';

const Calculator = () => {
  const [initState, setInitState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHndler = (buttonName) => {
    setInitState((prev) => calculate(prev, buttonName));
  };

  const { total, next, operation } = initState;
  return (
    <div>
      <Result total={total} next={next} operation={operation} />
      <Table onClickHndler={onClickHndler} />
    </div>
  );
};

export default Calculator;
