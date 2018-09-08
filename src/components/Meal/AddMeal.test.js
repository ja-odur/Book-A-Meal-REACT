import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import AddMeal from './AddMeal';

function setup(showMeal=false, saving=false, mealStatus, errors=[]) {
  const props = {
    showMeal: showMeal,
    mealData: {},
    onChange: () => {},
    onSave: () => {},
    saving: {saving}, mealAddStatus: mealStatus, errors: errors,
  };

  return shallow(<AddMeal {...props} />);
}

describe('<AddMeal />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It shows meals', () => {
      const wrapper = setup(true);
      expect(wrapper.find('.caterer').text()).toBe('ADD MEAL');
    });

    test('It displays meal status', () => {
      const wrapper = setup(true, false, 'mealStatus');
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It displays meal errors', () => {
      const wrapper = setup(true, false, 'mealStatus', [{addMealError:'Invalid price'}]);
      expect(wrapper.find('.not-danger').text()).toBe('Invalid price');
    });

    test('It displays "Adding Meal..." when saving a meal', () => {
      const wrapper = setup(true, true, 'mealStatus');
      expect(wrapper.find('input').props().value).toBe('Adding Meal...');
    });

  });
});
