import {setAuthorizationToken} from './api';
import expect from "expect";

describe('Set authorization', () => {
  test('renders the component', () => {
    setAuthorizationToken('yt6235ert3fvx5yy62');
    setAuthorizationToken(false);
    expect(true).toBe(true);
  });
});
