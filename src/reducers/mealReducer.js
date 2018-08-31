import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function mealReducer(state=initialState.meals, action) {
  switch(action.type){
    case actionTypes.ADD_MEAL_SUCCESS:
      return [...state, Object.assign({}, action.data)];

    default:
      return state;
  }
}
