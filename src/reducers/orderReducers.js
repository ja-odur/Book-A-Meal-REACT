import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function orderReducer(state=initialState.orders, action) {
  switch(action.type){
    case actionTypes.ORDER_MEAL_SUCCESS:
      return state;

    case actionTypes.GET_ORDERS_CUSTOMER_SUCCESS:
      return action.data;

    case actionTypes.REMOVE_ORDER_SUCCESS:
      return state;

    case actionTypes.GET_ORDERS_CATERER_SUCCESS:
      return action.data;

    case actionTypes.GET_ORDERS_CATERER_FAILURE:
      return [];

    case actionTypes.CLEAR_ORDER_SUCCESS:
      return state;

    default:
      return state;
  }
}
