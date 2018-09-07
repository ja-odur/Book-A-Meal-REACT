import {combineReducers} from 'redux';
import login from './loginReducer';
import register from './RegisterReducer';
import errors from './errorsReducers';
import saving from './savingReducer';
import meals from './mealReducer';
import menu from './menuReducer';
import menus from './menusReducer';
import orders from './orderReducers';
import orderHistory from './orderHistoryReducer';
import trendingMeals from './trendingMealsReducer';

const rootReducer = combineReducers({
  login,
  register,
  meals,
  trendingMeals,
  menu,
  menus,
  errors,
  orders,
  orderHistory,
  saving,
});

export default rootReducer;


