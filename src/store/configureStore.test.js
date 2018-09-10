import configureStore from './configureStore';
import * as loginActions from '../actions/loginActions';
import expect from "expect";



describe('store', () => {
  test('it creates login actions', () => {
    const store = configureStore();

    const loginData = {category: 'user', username: 'username', password: 'password'};

    const action = loginActions.loginSuccess(loginData);

    store.dispatch(action);

    const actualAction = store.getState().login[0];

    expect(actualAction).toBe(action.data);
  });

});


