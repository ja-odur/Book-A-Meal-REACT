import * as actionTypes from './ActionTypes';
import {addMealApi, getMeals} from '../api/api';
import {clearErrors, addMealError, loadMealError} from './errorsActions';
import {saving} from './savingActions';

function addMealSuccess(data){
  return {type: actionTypes.ADD_MEAL_SUCCESS, data};
}

function loadMealsSuccess(data){
  return {type: actionTypes.LOAD_MEALS_SUCCESS, data};
}

export function addMeal(data){
  return function (dispatch) {
    return addMealApi(data)
      .then(response => {
        dispatch(addMealSuccess(data));
        dispatch(saving({saving: false}));
        dispatch(clearErrors(data));
        dispatch(loadMeals());
        return response.data.message;
      })
      .catch(errors => {
        dispatch(addMealError({addMealError: errors.response.data.message}));
        console.log('error meals', errors.response.data);
        return false;
      });
  };
}

export function loadMeals() {
  return function (dispatch) {
    return getMeals()
      .then(response => {
        dispatch(loadMealsSuccess(response.data.message));
      })
      .catch(errors => {
        dispatch(loadMealError({loadMealErrors: errors.response.data.message}));
      });
  };
}
