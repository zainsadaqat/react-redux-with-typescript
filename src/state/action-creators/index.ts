import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const depositMoney = (money: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: money,
    });
  };
};

export const withdrawMoney = (money: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: money,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.BANKRUPT });
  };
};
