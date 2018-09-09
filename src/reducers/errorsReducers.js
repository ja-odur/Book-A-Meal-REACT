import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function errorReducer(state=initialState.errors, action) {
  switch(action.type){
    case actionTypes.LOGIN_FAILURE_ERROR:
      return [...state, Object.assign({}, action.data)];

    case actionTypes.SIGN_UP_FAILURE_ERROR:
      return [...state, Object.assign({}, action.data)];

    case actionTypes.ADD_MEAL_FAILURE:
      return [...state, Object.assign({}, action.data)];


    case actionTypes.CLEAR_ERRORS:
      return [];

    default:
      return state;
  }
}
