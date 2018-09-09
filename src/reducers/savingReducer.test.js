import expect from 'expect';
import * as actions from '../actions/savingActions';
import savingReducer from './savingReducer';

describe('order reducer', () => {

  test('order meal success', () => {
    const newState = savingReducer([], actions.saving({saving: true}));
    expect(newState[0].saving).toBe(true);
  });


  test('default', () => {
    const newState = savingReducer([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
