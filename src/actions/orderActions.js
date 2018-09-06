import * as actionTypes from  './ActionTypes';
import {orderMealAPI, getOrdersCustomerAPI, removeOrderAPI} from '../api/api';

function orderMealSuccess(data) {
  return {type: actionTypes.ORDER_MEAL_SUCCESS, data};
}

function orderMealFailure(data) {
  return {type: actionTypes.ORDER_MEAL_FAILURE, data};
}

function getOrdersCustomerSuccess(data) {
  return {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data};
}

function getOrdersCustomerFailure(data) {
  return {type: actionTypes.GET_ORDERS_CUSTOMER_FAILURE, data};
}

function removeOrderSuccess(data) {
  return {type: actionTypes.REMOVE_ORDER_SUCCESS, data};
}

function removeOrderFailure(data) {
  return {type: actionTypes.REMOVE_ORDER_FAILURE, data};
}

export function orderMeal(meal_id) {
  return function (dispatch) {
    return orderMealAPI(meal_id)
      .then(response => {
        dispatch(orderMealSuccess(response.data.message));
        dispatch(getOrdersCustomer());
        return {success: true, message: response.data.message};
      })
      .catch(errors => {
        dispatch(orderMealFailure(errors.response.data.message));
        return {success: false, message: errors.response.data.message};
      });
  };
}

export function getOrdersCustomer() {
  return function (dispatch) {
    return getOrdersCustomerAPI()
      .then(response => {
        dispatch(getOrdersCustomerSuccess(response.data.message));
      })
      .catch(errors => {
        dispatch(getOrdersCustomerFailure(errors.response.data.message));
      });
  };
}

export function removeOrder(order_id) {
  return function (dispatch) {
    return removeOrderAPI(order_id)
      .then(response => {
        dispatch(removeOrderSuccess(response.data.message));
        dispatch(getOrdersCustomer());
        return {success: true, message: response.data.message};
      })
      .catch(errors => {
        dispatch(removeOrderFailure(errors.response.data.message));
        return {success: false, message: errors.response.data.message};

      });
  };
}
