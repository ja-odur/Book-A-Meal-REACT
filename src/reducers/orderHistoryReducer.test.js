import expect from 'expect';
import * as actions from '../actions/orderActions';
import orderHistorReducer from './orderHistoryReducer';

describe('menus reducer', () => {

  test('menu success', () => {
    const action = actions.viewOrderHistorySuccess([{menu: true}]);
    const newState = orderHistorReducer([], action);
    expect(newState[0].menu).toBe(true);
  });

  test('default', () => {
    const newState = orderHistorReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
