import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PointList from './PointList';

function setup(trendingMeals=[]) {
  const props = {
    trendingMeals: trendingMeals,
    onClick: () => {},
  };

  return shallow(<PointList {...props} />);
}

describe('<Pointlist />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('it list meals', () => {
      const wrapper = setup([{meal_id: 1, name: 'test', brand_name: 'yigas', menu_id: 3}]);
      expect(wrapper.find('.btn-primary').text()).toBe('Order');
    });

  });
});
