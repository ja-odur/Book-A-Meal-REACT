import expect from 'expect';
import * as actions from '../actions/registerActions';
import registerReducers from './RegisterReducer';

describe('order reducer', () => {

  test('order meal success', () => {
    const newState = registerReducers([], {type:'REGISTER', data:[]});
    expect(newState[0].data[0]).toBe(undefined);
  });


  test('default', () => {
    const newState = registerReducers([], {type: "UNKNOWN", data:[]});
    expect(newState[0]).toBe(undefined);
  });

});
