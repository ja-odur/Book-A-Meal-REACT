import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import OrderHistoryList from './OrderHistoryList';

function setup(history=[]) {
  const props = {
    orderHistory: history,
    onClick: () => {},
  };

  return shallow(<OrderHistoryList {...props} />);
}

describe('<OrderHistoryList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows order order History', () => {
      const wrapper = setup([{meal_id: 1, meal: 'test', price: 5000, points: 50, caterer: "test caterer",}]);
      expect(wrapper.find('.btn-primary').text()).toBe('Point');
    });

  });
});
