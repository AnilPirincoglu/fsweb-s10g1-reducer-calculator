import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, mC, mPlus, mR } from './actions';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (event) => {
    const number = event.target.value;
    dispatch(applyNumber(number));
  };

  const handleClick = (event) => {
    const operation = event.target.value;
    dispatch(changeOperation(operation));
  };

  const clear = () => {
    dispatch(clearDisplay());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(mPlus())} value={"M+"} />
              <CalcButton onClick={() => dispatch(mR())} value={"MR"} />
              <CalcButton onClick={() => dispatch(mC())} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={clickHandler} value={1} />
              <CalcButton onClick={clickHandler} value={2} />
              <CalcButton onClick={clickHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={clickHandler} value={4} />
              <CalcButton onClick={clickHandler} value={5} />
              <CalcButton onClick={clickHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={clickHandler} value={7} />
              <CalcButton onClick={clickHandler} value={8} />
              <CalcButton onClick={clickHandler} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={"+"} />
              <CalcButton onClick={handleClick} value={"*"} />
              <CalcButton onClick={handleClick} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clear} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
