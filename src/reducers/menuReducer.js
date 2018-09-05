import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function menuReducer(state=initialState.menu, action) {
  switch(action.type){
    case actionTypes.LOAD_MENU_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
