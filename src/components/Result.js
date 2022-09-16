const Result = (props) => {
  const { total, next, operation } = props;
  return (
    <>
      <h2 className="title">Your Math Calculator</h2>
      <div className="result-container" data-testid="result">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
    </>
  );
};
// Result.propTypes = {
//   result: PropTypes.number,
// };

// Result.defaultProps = {
//   result: 0,
// };
export default Result;
