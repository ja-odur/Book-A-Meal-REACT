import axios from 'axios';

export const url = 'https://book-a-meal-persistent-data.herokuapp.com/';
export const loginUrl = `${url}/api/v1/auth/login`;
export const signUpUrl = `${url}/api/v1/auth/signup`;
export const addMealUrl = `${url}/api/v1/meals/`;
export const getMealsUrl = `${url}/api/v1/meals/`;
export const getMenuPerCatererUrl = `${url}/api/v1/caterer/menu/`;
export const addMealsToMenuUrl = `${url}/api/v1/menu/meals/add/`;
export const removeMealFromMenuUrl = `${url}/api/v1/menu/meal/`;
export const getAllMenusUrl = `${url}/api/v1/menu/`;
export const orderMealUrl = `${url}/api/v1/orders/`;
export const getOrderPlacedUrl = `${url}/api/v1/orders/placed`;
export const removeOrderUrl = `${url}/api/v1/orders/`;
export const orderHistoryUrl = `${url}/api/v1/orders/history`;
export const pointMealUrl = `${url}/api/v1/meals/point/`;
export const getOrdersCatererUrl = `${url}/api/v1/orders`;
export const clearOrderUrl = `${url}/api/v1/orders/clear/`;
export const trendingUrl = `${url}/api/v1/meals/trending`;

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

export function getOrdersCatererAPI() {
  return axios.get(getOrdersCatererUrl);
}

export function clearOrderAPI(order_id){
  return axios.patch(`${clearOrderUrl}${order_id}`);
}

export function trendingMealsAPI() {
  return axios.get(trendingUrl);
}

export function setAuthorizationToken(token){
  if(token){
    axios.defaults.headers.common['access-token'] = `${token}`;
  }
  else {
    delete axios.defaults.headers.common['access-token'];
  }
}

