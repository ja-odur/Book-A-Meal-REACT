import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function loginReducer(state=initialState.login, action) {
  switch(action.type){
    case actionTypes.LOGIN_SUCCESS:
      return [action.data];

    case actionTypes.LOGIN_FAILURE:
      return [action.data];

    default:
      return state;
  }
}
