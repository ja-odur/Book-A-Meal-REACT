import * as actionTypes from './ActionTypes';
import {addMealApi} from '../api/api';
import {clearErrors, addMealError} from './errorsActions';
import {saving} from './savingActions';

function addMealSuccess(data){
  return {type: actionTypes.ADD_MEAL_SUCCESS, data};
}

export function addMeal(data){
  return function (dispatch) {
    return addMealApi(data)
      .then(response => {
        dispatch(addMealSuccess(data));
        dispatch(saving({saving: false}));
        dispatch(clearErrors(data));
        return response.data.message;
      })
      .catch(errors => {
        dispatch(addMealError({addMealError: errors.response.data.message}));
        console.log('error meals', errors.response.data);
        return false;
      });
  };
}
