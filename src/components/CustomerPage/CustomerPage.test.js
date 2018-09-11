import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {CustomerPage, mapStateToProps, mapDispatchToProps} from './CustomerPage';

const state = {
  login: ['test'],
  menus: [],
  orders: [],
  orderHistory: [],
  meals: [],
  trendingMeals: [],
};

function setup(success=true) {
  const props = {
    login: [{user:'test', loggedIn: true}],
    menus: [['yigas', [{menu_id: 1, name: 'test', price: 5000}] ]],
    orders: [{meal: 'test', price: 5000, caterer: "yigas", order_id: 1}],
    orderHistory: [{meal: "test", price: 5000, caterer: "yigas", points: 50, meal_id: 30}],
    meals: [],
    trendingMeals: [],
    menuActions: {getAllMenus: () => { return Promise.resolve(); }},
    mealActions: {viewTrendingMeals: () => { return Promise.resolve(); },
                  pointMeal: () => { return Promise.resolve(); }},
    orderActions: {getOrdersCustomer: () => { return Promise.resolve();},
      viewOrderHistory: () => { return Promise.resolve();},
      orderMeal: () => { return Promise.resolve({success:success, message: "test"});},
      removeOrder: () => { return Promise.resolve({success:success, message: "test"});} },

  };
  return mount(<CustomerPage {...props} />);
}

describe('<CustomerPage />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it orders meals success', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.orderMeal').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it orders meals failure', () => {
      const wrapper = setup(false);
      const loginButton = wrapper.find('.orderMeal').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it points meals', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.pointMeal').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it delete order success', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.deleteOrder').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it delete order failure', () => {
      const wrapper = setup(false);
      const loginButton = wrapper.find('.deleteOrder').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('it shows tabs', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.active').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(25);
    });

    test('mapStatesToProps', () => {
      const output = mapStateToProps(state, []);
      expect(output.login[0]).toBe('test');
    });

    test('mapDispatchToProps', () => {
      const output = mapDispatchToProps();
    });

  });
});

