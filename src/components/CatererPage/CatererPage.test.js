import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {CatererPage, mapStateToProps, mapDispatchToProps} from './CatererPage';

const state = {
  login: ['test'],
  saving: [],
  errors: [],
  meals: [],
  menu: [],
  orders: [],
};

function setup(response=true) {
  const props = {
    login: [{user:'test', loggedIn: true}],
    saving: [],
    errors: [],
    meals: [{meal_id: 1, name: "test", price: 5000}],
    menu: [{menu_id: 1, name: "test", price: 50000, meal_id: 23}],
    orders: [{order_id: 1, meal: "test", price: 5000, customer: "yiga"}],
    orderHistory: [{meal: "test", price: 5000, caterer: "yigas", points: 50, meal_id: 30}],
    menuActions: {
                  loadMenu: () => { return Promise.resolve(); },
                  addMealsToMenu: () => { return Promise.resolve(); },
                  removeMealFromMenu: () => { return Promise.resolve(response); } },
    orderActions: {
                    getOrdersCaterer: () => { return Promise.resolve(); },
                    clearOrder: () => { return Promise.resolve(); },
                    viewOrderHistory: () => {} } ,
    mealActions: {loadMeals: () => { return Promise.resolve(); },
                  addMeal: () => { return Promise.resolve(true); }, },
    savingActions: {saving: () => { return Promise.resolve(); }},
  };
  return mount(<CatererPage {...props} />);
}

describe('<CatererPage />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it adds meal to menu', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.addMealMenu').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it clears orders', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.clearOrder').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it adds meal to menu', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.addMealToMenu').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it removes meal to menu success', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.removeMeal').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it removes meal to menu failure', () => {
      const wrapper = setup(false);
      const loginButton = wrapper.find('.removeMeal').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it shows tabs', () => {
      const wrapper = setup(false);
      const loginButton = wrapper.find('.active').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('on change', () => {
      const event = {target: {name: "name", value: "meal1"}};
      const wrapper = setup();
      const loginButton = wrapper.find('.username').first();
      loginButton.simulate('change' ,event);
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it adds meal to menu', () => {
      const event = {target: {name: "name", value: 3, checked: true}};
      const event2 = {target: {name: "name", value: 3, checked: false}};
      const wrapper = setup();
      const loginButton = wrapper.find('.mealToMenu').first();
      loginButton.simulate('change' ,event);
      loginButton.simulate('change' ,event2);
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it add meal on save', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.addMeal-submit').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
    });

    test('it shows order history', () => {
      const wrapper = setup();
      const loginButton = wrapper.find('.showOrderClick').first();
      loginButton.simulate('click');
      expect(wrapper.find('div').length).toBe(35);
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
