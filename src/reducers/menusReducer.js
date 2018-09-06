import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function menuReducer(state=initialState.menus, action) {
  switch(action.type){
    case actionTypes.GET_ALL_MENUS_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
