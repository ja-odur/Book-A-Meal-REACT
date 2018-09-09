import * as actionTypes from  './ActionTypes';
import {orderMealAPI, getOrdersCustomerAPI, removeOrderAPI,
  orderHistoryAPI, getOrdersCatererAPI, clearOrderAPI} from '../api/api';

export function orderMealSuccess(data) {
  return {type: actionTypes.ORDER_MEAL_SUCCESS, data};
}

export function orderMealFailure(data) {
  return {type: actionTypes.ORDER_MEAL_FAILURE, data};
}

export function getOrdersCustomerSuccess(data) {
  return {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data};
}

export function getOrdersCustomerFailure(data) {
  return {type: actionTypes.GET_ORDERS_CUSTOMER_FAILURE, data};
}

export function removeOrderSuccess(data) {
  return {type: actionTypes.REMOVE_ORDER_SUCCESS, data};
}

export function removeOrderFailure(data) {
  return {type: actionTypes.REMOVE_ORDER_FAILURE, data};
}

export function viewOrderHistorySuccess(data) {
  return {type: actionTypes.ORDER_HISTORY_SUCCESS, data};
}

export function viewOrderHistoryFailure(data) {
  return {type: actionTypes.ORDER_HISTORY_FAILURE, data};
}

export function getOrdersCatererSuccess(data) {
  return {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data};
}

export function getOrdersCatererFailure(data) {
  return {type: actionTypes.GET_ORDERS_CATERER_FAILURE, data};
}

export function clearOrderSuccess(data) {
  return {type: actionTypes.CLEAR_ORDER_SUCCESS, data};
}

export function clearOrderFailure(data){
  return {type: actionTypes.CLEAR_ORDER_FAILURE, data};
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
        var orders;
        if(response.data.message === "No orders placed"){
          orders = [];
        }
        else {
          orders = response.data.message;
        }
        dispatch(getOrdersCustomerSuccess(orders));
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

export function viewOrderHistory() {
  return function (dispatch) {
    return orderHistoryAPI()
      .then(response => {
        let orderHistory;
        if(response.data.message === 'No order history'){
          orderHistory = [];
        }
        else{
          orderHistory = response.data.message;
        }
        dispatch(viewOrderHistorySuccess(orderHistory));
      })
      .catch(errors => {
        dispatch(viewOrderHistoryFailure(errors.response.data.message));
      });
  };
}

export function getOrdersCaterer() {
  return function (dispatch) {
    return getOrdersCatererAPI()
      .then(response => {
        var orders;

        if(response.data.message === "Oops, orders not found."){
          orders=[];
        }
        else {
          orders = response.data.message.content;
        }

        dispatch(getOrdersCatererSuccess(orders));
      })
      .catch(errors => {
        dispatch(getOrdersCatererFailure(errors.response.data.message));
      });
  };
}

export function clearOrder(order_id) {
  return function (dispatch) {
    return clearOrderAPI(order_id)
      .then(response => {
        dispatch(clearOrderSuccess(response.data.message));
        dispatch(getOrdersCaterer());
      })
      .catch(errors => {
        dispatch(clearOrderFailure(errors.response.data.message));
        dispatch(getOrdersCaterer());
      });
  };
}
