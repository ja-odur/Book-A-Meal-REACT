import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {LandingPage, mapStateToProps, mapDispatchToProps} from './LandingPage';

const state = {
  errors: [],
  saving: [],
  login: {isLoggedIn:false},
};

function setup(promiseData={loggedIn: true}) {
  const props = {
    saving: [{}],
    savingActions: {saving: () => { return Promise.resolve(); }},
    loginActions: {login: () => { return Promise.resolve(promiseData); }},
    signUpActions: {signUp: () => { return Promise.resolve({loggedIn: true, category: 'caterer'}); }},

  };
  return mount(<LandingPage {...props} />);
}

describe('<LandingPage />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(47);
    });

    test('it shows login form', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('#login');
      loginButton.simulate('click');
      expect(wrapper.state().loginClasses).toBe('login-form show');
      loginButton.simulate('click');
      expect(wrapper.state().loginClasses).toBe("login-form hidden");
    });

    test('it shows signup form', () => {
      const wrapper = setup();
      const signupButton = wrapper.find('#signup');
      signupButton.simulate('click');
      expect(wrapper.state().registerClasses).toBe('login-form show');
      signupButton.simulate('click');
      expect(wrapper.state().registerClasses).toBe("login-form hidden");
    });

  });

  describe('onChange()', () => {
    test('it captures login info', () => {
      const wrapper = setup();
      const event = {target: {name: "username", value: "name"}};
      const loginButton = wrapper.find('#login');
      loginButton.simulate('click');
      wrapper.find(".username").first().simulate('change', event);
      expect(wrapper.state().login.username).toBe("name");
    });

    test('it captures register info', () => {
      const wrapper = setup();
      const event = {target: {name: "username", value: "name"}};
      const signupButton = wrapper.find('#signup');
      signupButton.simulate('click');
      wrapper.find(".username").last().simulate('change', event);
      expect(wrapper.state().register.username).toBe("name");
    });

    test('it changes category', () => {
      const wrapper = setup();
      const event1 = {target: {name: "category", value: "caterer"}};
      const event2 = {target: {name: "category", value: "user"}};
      wrapper.find(".custom-select").last().simulate('change', event1);
      expect(wrapper.state().showBrandName).toBe(true);

      wrapper.find(".custom-select").last().simulate('change', event2);
      expect(wrapper.state().showBrandName).toBe(false);
    });

    test('it valids input data', () => {
      const wrapper = setup();
      const event1 = {target: {name: "first_name", value: ""}};
      const event2 = {target: {name: "email", value: "invalid_email"}};
      const event3 = {target: {name: "password", value: "123"}};
      const event4 = {target: {name: "confirm_password", value: "12345678"}};

      wrapper.find(".username").last().simulate('change', event1);
      expect(wrapper.state().form_errors.first_name).toBe('This field is required.');

      wrapper.find(".username").last().simulate('change', event2);
      expect(wrapper.state().form_errors.email).toBe('Please provide a valid email.');

      wrapper.find(".username").last().simulate('change', event3);
      expect(wrapper.state().form_errors.password).toBe("Password too short. Atleast 5 characters long.");

      wrapper.find(".username").last().simulate('change', event4);
      expect(wrapper.state().form_errors.confirm_password).toBe("Passwords don't match.");

    });

  });

  describe('onSave()', () => {
    test('it logs in', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('#submit-login');
      loginButton.simulate('click');
      expect(wrapper.state().login.username).toBe('');
    });

    test('it logs in 2', () => {
      const wrapper = setup({loggedIn: true, category: "caterer"});
      const loginButton = wrapper.find('#submit-login');
      loginButton.simulate('click');
      expect(wrapper.state().login.username).toBe('');
    });

    test('it registers', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('#register-submit');
      loginButton.simulate('click');
      expect(wrapper.state().register.username).toBe('');
    });

    test('it validates registration form', () => {
      const events = [{target: {name: "first_name", value: "odur"}}, {target: {name: "category", value: "user"}},
        {target: {name: "last_name", value: "joseph"}},
        {target: {name: "username", value: "jaodur"}},
        {target: {name: "password", value: "12345"}},
        {target: {name: "confirm_password", value: "12345"}},
        {target: {name: "email", value: "ja@example.com"}},
        {target: {name: "address", value: ""}},
      ];

      const wrapper = setup();

      events.forEach(function (event) {
        wrapper.find(".username").last().simulate('change', event);
      });
      const loginButton = wrapper.find('#register-submit');
      loginButton.simulate('click');
      expect(wrapper.state().register.username).toBe('jaodur');
    });

    test('mapStatesToProps', () => {
      const output = mapStateToProps(state, []);
      expect(output.loggedIn).toBe(false);
    });

    test('mapDispatchToProps', () => {
      const output = mapDispatchToProps();
    });

  });

});
