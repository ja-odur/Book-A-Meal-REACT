import expect from 'expect';
import * as actions from '../actions/orderActions';
import orderReducers from './orderReducers';

describe('order reducer', () => {

  test('order meal success', () => {
    const action = actions.orderMealSuccess([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('get order customer success', () => {
    const action = actions.getOrdersCustomerSuccess([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0].menu).toBe(true);
  });

  test('remove order customer success', () => {
    const action = actions.removeOrderSuccess([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('get orders caterer success', () => {
    const action = actions.getOrdersCatererSuccess([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0].menu).toBe(true);
  });

  test('remove order customer success', () => {
    const action = actions.getOrdersCatererFailure([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('clear order success', () => {
    const action = actions.clearOrderSuccess([{menu: true}]);
    const newState = orderReducers([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('default', () => {
    const newState = orderReducers([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
