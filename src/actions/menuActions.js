import * as actionTypes from  './ActionTypes';
import {getMenuPerCaterer} from '../api/api';

function loadMenuSuccess(data){
  return {type: actionTypes.LOAD_MENU_SUCCESS, data};
}

function loadMenuFailure(data){
  return {type: actionTypes.LOAD_MENU_FAILURE, data};

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


