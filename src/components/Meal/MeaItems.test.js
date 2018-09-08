import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import MeaItems from './MeaItems';

function setup(meals=[]) {
  const props = {
    meals: meals,
    onChange: () => {},
  };

  return shallow(<MeaItems {...props} />);
}

describe('<MealItems />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows meals', () => {
      const wrapper = setup([{meal_id:1, name: 'test', price: 5000,}]);
      expect(wrapper.find('input').props().value).toBe(1);
    });

  });
});
