import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import LoginForm from './LoginForm';



function setup(saving=false, errors=[]){
  const props = {
    login: {},
    onSave: () => {},
    onChange: () => {},
    saving: {saving},
    errors: errors
  };

  return shallow(<LoginForm {...props} />);
}

describe('<LoginForm />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('form').length).toBe(1);
      expect(wrapper.find('input').props().value).toBe('Login');
    });

    test('login button is labelled "Logging in..." when logging in', () => {
      const wrapper = setup(true);
      expect(wrapper.find('input').props().value).toBe('Logging in...');
    });

    test('It shows login errors', () => {
      const wrapper = setup(true, [{loginError:'invalid username or password'}]);
      expect(wrapper.find('.error').text())
        .toBe('invalid username or password or Category');
    });
  });
});
