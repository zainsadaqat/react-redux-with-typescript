import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h2>{amount}</h2>
      <button type="button" onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <button type="button" onClick={() => withdrawMoney(1000)}>
        Withdraw
      </button>
      <button type="button" onClick={() => bankrupt()}>
        Bankrupt
      </button>
    </div>
  );
}

export default App;
