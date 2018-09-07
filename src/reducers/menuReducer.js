import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function menuReducer(state=initialState.menu, action) {
  switch(action.type){
    case actionTypes.LOAD_MENU_SUCCESS:
      return action.data;

    case actionTypes.ADD_MEALS_TO_MENU_FAILURE:
      return state;

    case actionTypes.REMOVE_MEAL_FROM_MENU_SUCCESS:
      return state;

    case actionTypes.LOAD_MENU_FAILURE:
      return [];

    default:
      return state;
  }
}
