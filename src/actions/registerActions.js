import {signUpApi} from '../api/api';
import {login, loginFailure} from './loginActions';
import {signUpFailureError} from './errorsActions';

export function signUp(data) {
  return function (dispatch) {
    return signUpApi(data)
      .then(response => {
        dispatch(login(data));
        return {loggedIn:true, category:data['category']};

      })
      .catch(errors =>{
        dispatch(signUpFailureError({signUpError: errors.response.data.message}));
        dispatch(loginFailure({user:data['username'], isLoggedIn: false}));
        return {loggedIn:false, category:data['category']};

      });
  };
}
