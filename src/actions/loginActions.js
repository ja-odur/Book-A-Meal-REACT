import {loginApi, setAuthorizationToken} from '../api/api';
import * as actionTypes from './ActionTypes';
import {loginFailureError, clearErrors} from './errorsActions';
import {saving} from './savingActions';

export function loginSuccess(data) {
  return {type: actionTypes.LOGIN_SUCCESS, data};
}

export function loginFailure(data) {
  return {type: actionTypes.LOGIN_FAILURE, data};
}


export function login(data) {
  return function (dispatch) {
    return loginApi(data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', data['username']);
        dispatch(loginSuccess({user:data['username'], isLoggedIn: true}));
        dispatch(saving({saving: false}));
        dispatch(clearErrors(data));
        setAuthorizationToken(res.data.token);
        return {loggedIn:true, category:data['category']};
      })
      .catch(errors =>{
        localStorage.removeItem('token');
        dispatch(loginFailureError({loginError: errors.response.data.message}));
        dispatch(loginFailure({user:data['username'], isLoggedIn: false}));
        setAuthorizationToken(false);
        dispatch(saving({saving: false}));
        return false;
      });
  };
}
