import * as actionTypes from './ActionTypes';
import {addMealApi, getMeals, pointMealAPI, trendingMealsAPI} from '../api/api';
import {clearErrors, addMealError, loadMealError} from './errorsActions';
import {viewOrderHistory} from './orderActions';
import {saving} from './savingActions';

function addMealSuccess(data){
  return {type: actionTypes.ADD_MEAL_SUCCESS, data};
}

function loadMealsSuccess(data){
  return {type: actionTypes.LOAD_MEALS_SUCCESS, data};
}

function pointMealSuccess(data) {
  return {type:actionTypes.POINT_MEAL_SUCCESS, data};
}

function pointMealFailure(data) {
  return {type: actionTypes.POINT_MEAL_FAILURE, data};
}

function viewTrendingMealsSuccess(data) {
  return {type: actionTypes.VIEW_TRENDING_SUCCESS, data};
}

function viewTrendingMealsFailure(data) {
  return {type: actionTypes.VIEW_TRENDING_FAILURE, data};
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
        console.log('meals', response.data.message);
        dispatch(loadMealsSuccess(response.data.message));
      })
      .catch(errors => {
        console.log('errors',errors);
        dispatch(loadMealError({loadMealErrors: errors.response.data.message}));
      });
  };
}

export function pointMeal(meal_id) {
  return function (dispatch) {
    return pointMealAPI(meal_id)
      .then(response => {
        dispatch(pointMealSuccess(response.data.message));
        dispatch(viewOrderHistory());
        dispatch(viewTrendingMeals());
      })
      .catch(errors => {
        dispatch(viewTrendingMeals());
        dispatch(pointMealFailure(errors.response.data.message));
      });
  };
}

export function viewTrendingMeals() {
  return function (dispatch) {
    return trendingMealsAPI()
      .then(response => {
        dispatch(viewTrendingMealsSuccess(response.data.message));
      })
      .catch(errors => {
        dispatch(viewTrendingMealsFailure(errors.response.data.message));
      });
  };
}
