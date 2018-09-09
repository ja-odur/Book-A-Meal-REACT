import expect from 'expect';
import * as actions from '../actions/menuActions';
import menuReducer from './menuReducer';

describe('menu reducer', () => {

  test('menu success', () => {
    const action = actions.loadMenuSuccess([{menu: true}]);
    const newState = menuReducer([], action);
    expect(newState[0].menu).toBe(true);
  });

  test('add meal failure', () => {
    const action = actions.addMealsToMenuFailure({menu: false});
    const newState = menuReducer([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('remove meal success', () => {
    const action = actions.removeMealFromMenuSuccess({menu: false});
    const newState = menuReducer([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('remove meal success', () => {
    const action = actions.loadMenuFailure({menu: false});
    const newState = menuReducer([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('default', () => {
    const newState = menuReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
