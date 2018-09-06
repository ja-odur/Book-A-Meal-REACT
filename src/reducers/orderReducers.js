import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function orderReducer(state=initialState.orders, action) {
  switch(action.type){
    case actionTypes.ORDER_MEAL_SUCCESS:
      return state;

    default:
      return state;
  }
}
