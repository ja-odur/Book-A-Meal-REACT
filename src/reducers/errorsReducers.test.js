import expect from 'expect';
import * as actions from '../actions/errorsActions';
import errorsReducer from './errorsReducers';
import initialState from "./initialState";

describe('errors reducer', () => {
  const intialState = {
    errors: []
  };
    test('it should add login errors', () => {
      const action = actions.loginFailureError({loginError: 'login error'});
      const newState = errorsReducer(initialState.errors, action);
      expect(newState[0].loginError).toBe("login error");
    });

  test('it should add signup errors', () => {
    const action = actions.signUpFailureError({signupError: 'signup error'});
    const newState = errorsReducer(initialState.errors, action);
    expect(newState[0].signupError).toBe("signup error");
  });

  test('it should add meal errors', () => {
    const action = actions.addMealError({mealError: 'meal error'});
    const newState = errorsReducer(initialState.errors, action);
    expect(newState[0].mealError).toBe("meal error");
  });

  test('it clears errors', () => {
    const action = actions.clearErrors({mealError: 'meal error'});
    const newState = errorsReducer([{error: 'error'}], action);
    expect(newState[0]).toBe(undefined);
  });

  test('default', () => {
    const action = actions.loadMealError([{mealError: 'meal error'}]);
    const newState = errorsReducer([{error: 'error'}], action);
    expect(newState[0].error).toBe('error');
  });

});

