import * as actionTypes from  './ActionTypes';
import {getMenuPerCaterer, addMealsToMenuApi} from '../api/api';

function loadMenuSuccess(data){
  return {type: actionTypes.LOAD_MENU_SUCCESS, data};
}

function loadMenuFailure(data){
  return {type: actionTypes.LOAD_MENU_FAILURE, data};
}

function addMealsToMenuSuccess(data){
  return { type: actionTypes.ADD_MEALS_TO_MENU_SUCCESS, data};
}

function addMealsToMenuFailure(data){
  return { type: actionTypes.ADD_MEALS_TO_MENU_FAILURE, data};
}

export function loadMenu() {
  return function (dispatch) {
    return getMenuPerCaterer()
      .then(response => {
        console.log('response', response.data.message.MENU);
          dispatch(loadMenuSuccess(response.data.message.MENU));
        }
      )
      .catch(errors => {
        console.log('errors in menu', errors);
        dispatch(loadMenuFailure(errors.response.data.message));

      });
  };
}

export function addMealsToMenu(data){
  return function(dispatch){
    return addMealsToMenuApi(data)
      .then(response => {
          dispatch(addMealsToMenuSuccess(response.data.message));
          dispatch(loadMenu());
        }
      )
      .catch(errors => {
        console.log('errors', errors);
          dispatch(addMealsToMenuFailure(errors.response.data.message));
        }
      );
  };
}


