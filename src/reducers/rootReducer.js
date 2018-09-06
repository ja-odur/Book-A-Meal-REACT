import {combineReducers} from 'redux';
import login from './loginReducer';
import register from './RegisterReducer';
import errors from './errorsReducers';
import saving from './savingReducer';
import meals from './mealReducer';
import menu from './menuReducer';
import menus from './menusReducer';

const rootReducer = combineReducers({
  login,
  register,
  meals,
  menu,
  menus,
  errors,
  saving,
});

export default rootReducer;


