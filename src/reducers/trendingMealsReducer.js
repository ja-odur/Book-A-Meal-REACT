import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function trendingMealsReducer(state=initialState.trendingMeals, action) {
  switch(action.type){
    case actionTypes.VIEW_TRENDING_SUCCESS:
      return action.data;

    case actionTypes.VIEW_TRENDING_FAILURE:
      return [];

    default:
      return state;
  }
}
