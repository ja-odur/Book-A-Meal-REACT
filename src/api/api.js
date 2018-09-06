import axios from 'axios';

const url = 'http://127.0.0.1:5000';
const loginUrl = `${url}/api/v1/auth/login`;
const signUpUrl = `${url}/api/v1/auth/signup`;
const addMealUrl = `${url}/api/v1/meals/`;
const getMealsUrl = `${url}/api/v1/meals/`;
const getMenuPerCatererUrl = `${url}/api/v1/caterer/menu/`;
const addMealsToMenuUrl = `${url}/api/v1/menu/meals/add/`;
const removeMealFromMenuUrl = `${url}/api/v1/menu/meal/`;
const getAllMenusUrl = `${url}/api/v1/menu/`;
const orderMealUrl = `${url}/api/v1/orders/`;
const getOrderPlacedUrl = `${url}/api/v1/orders/placed`;
const removeOrderUrl = `${url}/api/v1/orders/`;
const orderHistoryUrl = `${url}/api/v1/orders/history`;
const pointMealUrl = `${url}/api/v1/meals/point/`;

export function loginApi(loginData) {
  return axios.post(loginUrl, loginData);
}

export function signUpApi(signUpData) {
  return axios.post(signUpUrl, signUpData);
}

export function addMealApi(mealData) {
  return axios.post(addMealUrl, mealData);
}

export function getMeals(){
  return axios.get(getMealsUrl);
}

export function getMenuPerCaterer(){
  return axios.get(getMenuPerCatererUrl);
}

export function addMealsToMenuApi(mealIds) {
  return axios.post(addMealsToMenuUrl, mealIds);
}

export function removeMealFromMenuApi(mealId) {
  return axios.post(removeMealFromMenuUrl, mealId);
}

export function getAllMenusAPi() {
  return axios.get(getAllMenusUrl);
}

export function orderMealAPI(meal_id) {
  return axios.post(`${orderMealUrl}${meal_id}`);
}

export function getOrdersCustomerAPI() {
  return axios.get(getOrderPlacedUrl);
}

export function removeOrderAPI(order_id) {
  return axios.delete(`${removeOrderUrl}${order_id}`);
}

export function orderHistoryAPI() {
  return axios.get(orderHistoryUrl);
}

export function pointMealAPI(meal_id) {
  return axios.post(`${pointMealUrl}${meal_id}`);
}

export function setAuthorizationToken(token){
  if(token){
    axios.defaults.headers.common['access-token'] = `${token}`;
  }
  else {
    delete axios.defaults.headers.common['access-token'];
  }
}

