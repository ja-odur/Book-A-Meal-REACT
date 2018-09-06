import * as actionTypes from  './ActionTypes';
import {orderMealAPI} from '../api/api';

function orderMealSuccess(data) {
  return {type: actionTypes.ORDER_MEAL_SUCCESS, data};
}

function orderMealFailure(data) {
  return {type: actionTypes.ORDER_MEAL_FAILURE, data};
}

export function orderMeal(meal_id) {
  return function (dispatch) {
    return orderMealAPI(meal_id)
      .then(response => {
        dispatch(orderMealSuccess(response.data.message));
        return {success: true, message: response.data.message};
      })
      .catch(errors => {
        dispatch(orderMealFailure(errors.response.data.message));
        return {success: false, message: errors.response.data.message};
      });
  };
}
