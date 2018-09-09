import * as actionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function savingReducer(state=initialState.saving, action) {
  switch(action.type){
    case actionTypes.SAVING:
      return [...state, Object.assign({}, action.data)];

    default:
      return state;
  }
}
