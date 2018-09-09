import expect from 'expect';
import * as actions from '../actions/menuActions';
import menusReducer from './menusReducer';

describe('menus reducer', () => {

  test('menu success', () => {
    const action = actions.getAllMenusSuccess([{menu: true}]);
    const newState = menusReducer([], action);
    expect(newState[0].menu).toBe(true);
  });

  test('default', () => {
    const newState = menusReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
