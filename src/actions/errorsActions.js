import * as actionTypes from './ActionTypes';

export function loginFailureError(data) {
  return {type: actionTypes.LOGIN_FAILURE_ERROR, data};
}

export function signUpFailureError(data) {
  return {type: actionTypes.SIGN_UP_FAILURE_ERROR, data};
}

export function addMealError(data) {
  return {type: actionTypes.ADD_MEAL_FAILURE, data};
}

export function clearErrors(data){
  return {type: actionTypes.CLEAR_ERRORS, data};
}
