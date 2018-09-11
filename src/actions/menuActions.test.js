import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import Adapter from 'axios-mock-adapter';
import {getMenuPerCatererUrl, addMealsToMenuUrl, removeMealFromMenuUrl, getAllMenusUrl} from '../api/api';
import expect from 'expect';
import * as actionTypes from './ActionTypes';
import * as menuActions from './menuActions';
import initialState from '../reducers/initialState';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const mock = new Adapter(axios);

describe('meal Actions', () => {
  test('should create a LOAD_MENU_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.LOAD_MENU_SUCCESS, data:meal};
    const action = menuActions.loadMenuSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a LOAD_MENU_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.LOAD_MENU_FAILURE, data:meal};
    const action = menuActions.loadMenuFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a ADD_MEALS_TO_MENU_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.ADD_MEALS_TO_MENU_SUCCESS, data:meal};
    const action = menuActions.addMealsToMenuSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a ADD_MEALS_TO_MENU_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.ADD_MEALS_TO_MENU_FAILURE, data:meal};
    const action = menuActions.addMealsToMenuFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a REMOVE_MEAL_FROM_MENU_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.REMOVE_MEAL_FROM_MENU_SUCCESS, data:meal};
    const action = menuActions.removeMealFromMenuSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a REMOVE_MEAL_FROM_MENU_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.REMOVE_MEAL_FROM_MENU_FAILURE, data:meal};
    const action = menuActions.removeMealFromMenuFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ALL_MENUS_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.GET_ALL_MENUS_SUCCESS, data:meal};
    const action = menuActions.getAllMenusSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ALL_MENUS_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = { type: actionTypes.GET_ALL_MENUS_FAILURE, data:meal};
    const action = menuActions.getAllMenusFailure(meal);

    expect(action).toEqual(expectedAction);
  });

});

describe('Async menu Actions', () => {

  test('It loads menu successfully', () => {
    mock.onGet(getMenuPerCatererUrl).reply(200, {message:{MENU: []}});

    const expectedActions = [
      {type: actionTypes.LOAD_MENU_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.loadMenu())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOAD_MENU_SUCCESS);
      });
  });

  test('It loads menu failure', () => {
    mock.onGet(getMenuPerCatererUrl).reply(400, {message:{MENU: []}});

    const expectedActions = [
      {type: actionTypes.LOAD_MENU_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.loadMenu())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOAD_MENU_SUCCESS);
      });
  });

  test('It adds meals successfully', () => {
    mock.onPost(addMealsToMenuUrl).reply(200, {message:'string'});

    const expectedActions = [
      { type: actionTypes.ADD_MEALS_TO_MENU_SUCCESS, data:[]},
      {type: actionTypes.LOAD_MENU_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.addMealsToMenu([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It adds meals failure', () => {
    mock.onPost(addMealsToMenuUrl).reply(400, {message:'string'});

    const expectedActions = [
      { type: actionTypes.ADD_MEALS_TO_MENU_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.addMealsToMenu([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It removes meals successfully', () => {
    mock.onPost(removeMealFromMenuUrl).reply(200, {message:'string'});

    const expectedActions = [
      {type: actionTypes.REMOVE_MEAL_FROM_MENU_SUCCESS, data:[]},
      {type: actionTypes.LOAD_MENU_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.removeMealFromMenu([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It removes meals failure', () => {
    mock.onPost(removeMealFromMenuUrl).reply(400, {message:'string'});

    const expectedActions = [
      {type: actionTypes.REMOVE_MEAL_FROM_MENU_FAILURE, data:[]},
      {type: actionTypes.LOAD_MENU_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.removeMealFromMenu([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets all menus successfully', () => {
    mock.onGet(getAllMenusUrl).reply(200, {message:{MENU: []}});

    const expectedActions = [
      {type: actionTypes.GET_ALL_MENUS_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.getAllMenus())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets all menus failure', () => {
    mock.onGet(getAllMenusUrl).reply(400, {message:{MENU: []}});

    const expectedActions = [
      {type: actionTypes.GET_ALL_MENUS_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(menuActions.getAllMenus())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

});
