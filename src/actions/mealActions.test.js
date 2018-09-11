import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import Adapter from 'axios-mock-adapter';
import {pointMealUrl, addMealUrl, trendingUrl, getMealsUrl} from '../api/api';
import expect from 'expect';
import * as actionTypes from './ActionTypes';
import * as mealActions from './mealActions';
import initialState from '../reducers/initialState';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const mock = new Adapter(axios);

describe('meal Actions', () => {
    test('should create a ADD_MEAL_SUCCESS action', () => {
      const meal = {meal: 'test', price: 5000};
      const expectedAction = {type: actionTypes.ADD_MEAL_SUCCESS, data: meal};
      const action = mealActions.addMealSuccess(meal);

      expect(action).toEqual(expectedAction);
    });

  test('should create a LOAD_MEALS_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.LOAD_MEALS_SUCCESS, data: meal};
    const action = mealActions.loadMealsSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a POINT_MEAL_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type:actionTypes.POINT_MEAL_SUCCESS, data: meal};
    const action = mealActions.pointMealSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a POINT_MEAL_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.POINT_MEAL_FAILURE, data:meal};
    const action = mealActions.pointMealFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a VIEW_TRENDING_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.VIEW_TRENDING_SUCCESS, data:meal};
    const action = mealActions.viewTrendingMealsSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a VIEW_TRENDING_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.VIEW_TRENDING_FAILURE, data: meal};
    const action = mealActions.viewTrendingMealsFailure(meal);

    expect(action).toEqual(expectedAction);
  });


});

describe('Async meal Actions', () => {

  test('It loads meals successfully', () => {
    mock.onGet(getMealsUrl).reply(200,{message: []});

    const expectedActions = [
      {type: actionTypes.LOAD_MEALS_SUCCESS, data:[]}
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.loadMeals())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOAD_MEALS_SUCCESS);
    });
  });

  test('It loads meals failure', () => {
    mock.onGet(getMealsUrl).reply(400,{message: []});

    const expectedActions = [
      {type: actionTypes.LOAD_MEALS_FAILURE, data:[]}
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.loadMeals())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOAD_MEALS_SUCCESS);
      });
  });


  test('It adds meal successfully', () => {
    mock.onPost(addMealUrl).reply(201, {message: 'meal added'});

    const expectedActions = [
      {type: actionTypes.ADD_MEAL_SUCCESS, data: {mea: "test", price: 5000}},
      {type: actionTypes.SAVING, data: {saving: false}},
      {type: actionTypes.CLEAR_ERRORS, data: {mea: "test", price: 5000}},
      {type: actionTypes.LOAD_MEALS_SUCCESS, data:[]}

    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.addMeal({mea: "test", price: 5000}))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });

  test('It adds meal failure', () => {
    mock.onPost(addMealUrl).reply(400, {message: 'meal added'});

    const expectedActions = [
      {type: actionTypes.ADD_MEAL_FAILURE, data: {mea: "test", price: 5000}},
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.addMeal({mea: "test", price: 5000}))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });


  test('It gets trending meals', () => {
    mock.onGet(trendingUrl).reply(200, {message: 'meal added'});

    const expectedActions = [
      {type: actionTypes.VIEW_TRENDING_SUCCESS, data: []},
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.viewTrendingMeals())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });

  test('It gets trending meals failure', () => {
    mock.onGet(trendingUrl).reply(400, {message: 'meal added'});

    const expectedActions = [
      {type: actionTypes.VIEW_TRENDING_FAILURE, data: []},
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.viewTrendingMeals())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });

  test('It points meal', () => {
    mock.onGet(pointMealUrl).reply(200, {body: {message: 'meal added'} });

    const expectedActions = [
      {type: actionTypes.POINT_MEAL_SUCCESS, data: []},
      {type: actionTypes.VIEW_TRENDING_SUCCESS, data: []},
      {type: actionTypes.ORDER_HISTORY_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.pointMeal())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });

  test('It points meal failure', () => {
    mock.onGet(pointMealUrl).reply(404, {message: 'meal added'});

    const expectedActions = [
      {type: actionTypes.POINT_MEAL_FAILURE, data: []},
      {type: actionTypes.VIEW_TRENDING_SUCCESS, data: []},
    ];

    const store = mockStore(initialState.meals, expectedActions);

    store.dispatch(mealActions.pointMeal())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });

  });

});
