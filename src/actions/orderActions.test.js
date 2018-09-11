import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import Adapter from 'axios-mock-adapter';
import {orderMealUrl, getOrderPlacedUrl, removeOrderUrl, orderHistoryUrl, getOrdersCatererUrl, clearOrderUrl} from '../api/api';
import expect from 'expect';
import * as actionTypes from './ActionTypes';
import * as orderActions from './orderActions';
import initialState from '../reducers/initialState';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const mock = new Adapter(axios);

describe('order Actions', () => {
  test('should create a ORDER_MEAL_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.ORDER_MEAL_SUCCESS, data:meal};
    const action = orderActions.orderMealSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a ORDER_MEAL_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.ORDER_MEAL_FAILURE, data:meal};
    const action = orderActions.orderMealFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ORDERS_CUSTOMER_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data:meal};
    const action = orderActions.getOrdersCustomerSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ORDERS_CUSTOMER_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.GET_ORDERS_CUSTOMER_FAILURE, data:meal};
    const action = orderActions.getOrdersCustomerFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a REMOVE_ORDER_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.REMOVE_ORDER_SUCCESS, data:meal};
    const action = orderActions.removeOrderSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a REMOVE_ORDER_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.REMOVE_ORDER_FAILURE, data:meal};
    const action = orderActions.removeOrderFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a ORDER_HISTORY_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.ORDER_HISTORY_SUCCESS, data:meal};
    const action = orderActions.viewOrderHistorySuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a ORDER_HISTORY_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.ORDER_HISTORY_FAILURE, data:meal};
    const action = orderActions.viewOrderHistoryFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ORDERS_CATERER_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data:meal};
    const action = orderActions.getOrdersCatererSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a GET_ORDERS_CATERER_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.GET_ORDERS_CATERER_FAILURE, data:meal};
    const action = orderActions.getOrdersCatererFailure(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a CLEAR_ORDER_SUCCESS action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.CLEAR_ORDER_SUCCESS, data:meal};
    const action = orderActions.clearOrderSuccess(meal);

    expect(action).toEqual(expectedAction);
  });

  test('should create a CLEAR_ORDER_FAILURE action', () => {
    const meal = {meal: 'test', price: 5000};
    const expectedAction = {type: actionTypes.CLEAR_ORDER_FAILURE, data:meal};
    const action = orderActions.clearOrderFailure(meal);

    expect(action).toEqual(expectedAction);
  });

});

describe('Async order Actions', () => {

  test('It order meal successfully', () => {
    mock.onPost(orderMealUrl).reply(200, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.ORDER_MEAL_SUCCESS, data:[]},
      {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(orderActions.orderMeal(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It order meal failure', () => {
    mock.onPost(orderMealUrl).reply(400, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.ORDER_MEAL_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(orderActions.orderMeal(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets orders successfully', () => {
    mock.onGet(getOrderPlacedUrl).reply(200, {message: []});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(orderActions.getOrdersCustomer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets empty orders successfully', () => {
    mock.onGet(getOrderPlacedUrl).reply(200, {message: "No orders placed"});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(orderActions.getOrdersCustomer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets orders failure', () => {
    mock.onGet(getOrderPlacedUrl).reply(400, {message: []});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CUSTOMER_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.menu, expectedActions);

    store.dispatch(orderActions.getOrdersCustomer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It removes orders successfully', () => {
    mock.onDelete(`${removeOrderUrl}1`).reply(200, {message: []});

    const expectedActions = [
      {type: actionTypes.REMOVE_ORDER_SUCCESS, data:[]},
      {type: actionTypes.GET_ORDERS_CUSTOMER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.order, expectedActions);

    store.dispatch(orderActions.removeOrder(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It removes orders failure', () => {
    mock.onDelete(`${removeOrderUrl}1`).reply(400, {message: []});

    const expectedActions = [
      {type: actionTypes.REMOVE_ORDER_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.order, expectedActions);

    store.dispatch(orderActions.removeOrder(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It views order history successfully', () => {
    mock.onGet(orderHistoryUrl).reply(200, {message: []});

    const expectedActions = [
      {type: actionTypes.ORDER_HISTORY_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.order, expectedActions);

    store.dispatch(orderActions.viewOrderHistory())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It views empty order history successfully', () => {
    mock.onGet(orderHistoryUrl).reply(200, {message: 'No order history'});

    const expectedActions = [
      {type: actionTypes.ORDER_HISTORY_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.order, expectedActions);

    store.dispatch(orderActions.viewOrderHistory())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });


  test('It views order history failure', () => {
    mock.onGet(orderHistoryUrl).reply(400, {message: []});

    const expectedActions = [
      {type: actionTypes.ORDER_HISTORY_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.order, expectedActions);

    store.dispatch(orderActions.viewOrderHistory())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });


  test('It gets orders caterer successfully', () => {
    mock.onGet(getOrdersCatererUrl).reply(200, {message: {content: []}});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.orders, expectedActions);

    store.dispatch(orderActions.getOrdersCaterer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets empty orders caterer successfully', () => {
    mock.onGet(getOrdersCatererUrl).reply(200, {message: "Oops, orders not found."});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.orders, expectedActions);

    store.dispatch(orderActions.getOrdersCaterer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It gets orders caterer failure', () => {
    mock.onGet(getOrdersCatererUrl).reply(400, {message: {content: []}});

    const expectedActions = [
      {type: actionTypes.GET_ORDERS_CATERER_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.orders, expectedActions);

    store.dispatch(orderActions.getOrdersCaterer())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It clears orders successfully', () => {
    mock.onPatch(`${clearOrderUrl}1`).reply(200, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.CLEAR_ORDER_SUCCESS, data:[]},
      {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.orders, expectedActions);

    store.dispatch(orderActions.clearOrder(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It clears orders failure', () => {
    mock.onPatch(`${clearOrderUrl}1`).reply(400, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.CLEAR_ORDER_FAILURE, data:[]},
      {type: actionTypes.GET_ORDERS_CATERER_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.orders, expectedActions);

    store.dispatch(orderActions.clearOrder(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });


});

