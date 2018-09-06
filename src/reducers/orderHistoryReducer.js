import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function orderReducer(state=initialState.orderHistory, action) {
  switch(action.type){
    case actionTypes.ORDER_HISTORY_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
