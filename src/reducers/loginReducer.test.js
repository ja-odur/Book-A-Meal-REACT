import expect from 'expect';
import * as actions from '../actions/loginActions';
import loginReducer from './loginReducer';
import initialState from "./initialState";

describe('login reducer', () => {

  test('login success', () => {
    const action = actions.loginSuccess({loginSuccess: true});
    const newState = loginReducer(initialState.login, action);
    expect(newState[0].loginSuccess).toBe(true);
  });

  test('login failure', () => {
    const action = actions.loginFailure({loginSuccess: false});
    const newState = loginReducer(initialState.login, action);
    expect(newState[0].loginSuccess).toBe(false);
  });

  test('default', () => {
    const newState = loginReducer(initialState.login, {type: "UNKNOWN", data:[]});
    expect(newState[0].user).toBe(false);
  });

});
