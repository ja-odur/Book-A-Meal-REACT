import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function loginReducer(state=initialState.register, action) {
  switch(action.type){
    case actionTypes.REGISTER:
      return [...state, Object.assign({}, action)];

    default:
      return state
  }
}
