import expect from 'expect';
import * as actions from '../actions/mealActions';
import trendingReducer from './trendingMealsReducer';

describe('order reducer', () => {

  test('order meal success', () => {
    const newState = trendingReducer([], actions.viewTrendingMealsSuccess([{saving: true}]));
    expect(newState[0].saving).toBe(true);
  });

  test('order meal success', () => {
    const newState = trendingReducer([], actions.viewTrendingMealsFailure({saving: true}));
    expect(newState[0]).toBe(undefined);
  });


  test('default', () => {
    const newState = trendingReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
