import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import SignUpForm from './SignUpForm';

function setup(saving=false, showBrandName=false, errors=[]) {
  const props = {
    signUp: {},
    onSave: () => {},
    onChange: () => {},
    registering: {saving},
    errors: errors,
    formErrors: {},
    showBrandName: showBrandName
  };

  return shallow(<SignUpForm {...props} />);
}

describe('<SignUpForm />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('form').length).toBe(1);
    });

    test('Signup button is labelled "Registering..." when saving', () => {
      const wrapper = setup(true);
      expect(wrapper.find('input').props().value).toBe('Registering...');
    });

    test('It shows signup errors', () => {
      const wrapper = setup(true, false, [{signUpError:'invalid email address'}]);
      expect(wrapper.find('.error').text())
        .toBe('invalid email address');
    });

  });
});
