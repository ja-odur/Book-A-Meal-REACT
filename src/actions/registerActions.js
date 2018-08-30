import {signUpApi} from '../api/api';
import {login, loginFailure} from './loginActions';
import {signUpFailureError} from './errorsActions';

export function signUp(data) {
  return function (dispatch) {
    return signUpApi(data)
      .then(response => {
        console.log('true', response);
        return dispatch(login(data));
      })
      .catch(errors =>{
        dispatch(signUpFailureError({signUpError: errors.response.data.message}));
        dispatch(loginFailure({user:data['username'], isLoggedIn: false}));
        console.log('the errors');
        // throw(errors);
      })
      .then(loggedIn => {
        console.log('loggedIn', loggedIn);
      });
  };
}
