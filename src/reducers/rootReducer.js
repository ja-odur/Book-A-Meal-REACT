import {combineReducers} from 'redux';
import login from './loginReducer';
import register from './RegisterReducer';
import errors from './errorsReducers';
import saving from './savingReducer';

const rootReducer = combineReducers({
  login,
  register,
  errors,
  saving,
});

export default rootReducer;


