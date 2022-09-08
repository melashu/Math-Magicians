function Table(props) {
 

  function clickHandler(e) {
    const caller = props;
    caller.onClickHndler(e.target.id);
  }


    return (
      <div className="table">
        <div className="table-row">
          <button
            type="button"
            onClick={clickHandler}
            id="AC"
          >
            AC
          </button>
          <button type="button" id="+/-" onClick={clickHandler}>
            +/-
          </button>
          <button type="button" onClick={clickHandler} id="%">
            %
          </button>
          <button type="button" onClick={clickHandler} id="+">
            +
          </button>
        </div>

        <div className="table-row">
          <button type="button" id="7" onClick={clickHandler}>
            7
          </button>
          <button type="button" id="8" onClick={clickHandler}>
            8
          </button>
          <button type="button" id="9" onClick={clickHandler}>
            9
          </button>
          <button type="button" id="x" onClick={clickHandler}>
            x
          </button>
        </div>
        <div className="table-row">
          <button type="button" id="4" onClick={clickHandler}>
            4
          </button>
          <button type="button" id="5" onClick={clickHandler}>
            5
          </button>
          <button type="button" id="6" onClick={clickHandler}>
            6
          </button>
          <button type="button" id="-" onClick={clickHandler}>
            -
          </button>
        </div>
        <div className="table-row">
          <button type="button" id="1" onClick={clickHandler}>
            1
          </button>
          <button type="button" id="2" onClick={clickHandler}>
            2
          </button>
          <button type="button" id="3" onClick={clickHandler}>
            3
          </button>
          <button type="button" id="÷" onClick={clickHandler}>
            ÷
          </button>
        </div>
        <div className="table-row5">
          <button type="button" id="0" onClick={clickHandler}>
            0
          </button>
          <button type="button" id="." onClick={clickHandler}>
            .
          </button>
          <button type="button" id="=" onClick={clickHandler}>
            =
          </button>
        </div>
      </div>
    );
  
}

export default Table;
