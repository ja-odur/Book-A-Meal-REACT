import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';
import {loginUrl} from '../api/api';
import expect from 'expect';
import * as actionTypes from './ActionTypes';
import * as loginActions from './loginActions';
import initialState from '../reducers/initialState';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdaptor(axios);

describe('login Actions', () => {
  describe('loginSuccess', () => {
    it('shoud create a CREATE_COURSE_ACTION action', () => {
      const login = {category: 'user', username: 'username', password: 'password'};
      const expectedAction = {type: actionTypes.LOGIN_FAILURE, data:login};
      const action = loginActions.loginFailure(login);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe('Async login Actions', () => {
  test('It logs in successfully', () => {
    mock.onPost(loginUrl).reply(200, {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoiY2F0aFUDQELA_WPziQBg"} );
    const expectedActions = [
      {type: actionTypes.LOGIN_SUCCESS, data: {user:'username', isLoggedIn: true}},
      {type: actionTypes.SAVING, data: {saving: false}},
      {type: actionTypes.CLEAR_ERRORS, data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoiY2F0aFUDQELA_WPziQBg"}
    ];

    const store = mockStore(initialState.login, expectedActions);

    store.dispatch(loginActions.login({category: 'user', username: 'username', password: 'password'}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOGIN_SUCCESS);
        expect(actions[1].type).toBe(actionTypes.SAVING);
        expect(actions[2].type).toBe(actionTypes.CLEAR_ERRORS);
      });

  });

  test('It login failure', () => {
    mock.onPost(loginUrl).reply(400, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.LOGIN_FAILURE_ERROR, data: {loginError: "Invalid username or password"}},
      {type: actionTypes.LOGIN_FAILURE, data: {user: 'username', isLoggedIn: false}},
      {type: actionTypes.SAVING, data: {saving: false}},
    ];

    const store = mockStore(initialState.login, expectedActions);

    store.dispatch(loginActions.login({category: 'user', username: 'username', password: 'password'}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe(actionTypes.LOGIN_FAILURE_ERROR);
        expect(actions[1].type).toBe(actionTypes.LOGIN_FAILURE);
        expect(actions[2].type).toBe(actionTypes.SAVING);
      });

  });

});

