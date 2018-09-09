import expect from 'expect';
import * as actions from '../actions/mealActions';
import mealReducer from './mealReducer';

describe('meal reducer', () => {

  test('meal success', () => {
    const action = actions.loadMealsSuccess([{meal: true}]);
    const newState = mealReducer([], action);
    expect(newState[0].meal).toBe(true);
  });

  test('point meal', () => {
    const action = actions.pointMealSuccess({loginSuccess: false});
    const newState = mealReducer([], action);
    expect(newState[0]).toBe(undefined);
  });

  test('default', () => {
    const newState = mealReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
