import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import Adapter from 'axios-mock-adapter';
import {signUpUrl} from '../api/api';
import expect from 'expect';
import * as actionTypes from './ActionTypes';
import * as registerActions from './registerActions';
import initialState from '../reducers/initialState';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const mock = new Adapter(axios);

describe('Async register Actions', () => {

  test('It registers successfully', () => {
    mock.onPost(signUpUrl).reply(200, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.LOGIN_SUCCESS, data:[]},
    ];

    const store = mockStore(initialState.login, expectedActions);

    store.dispatch(registerActions.signUp([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

  test('It registers Failure', () => {
    mock.onPost(signUpUrl).reply(400, {message: 'string'});

    const expectedActions = [
      {type: actionTypes.SIGN_UP_FAILURE_ERROR, data:[]},
      {type: actionTypes.LOGIN_FAILURE, data:[]},
    ];

    const store = mockStore(initialState.login, expectedActions);

    store.dispatch(registerActions.signUp([]))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toBe(expectedActions);
      });
  });

});

