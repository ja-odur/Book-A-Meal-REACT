import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import OrderHistoryCatererList from './OrderHistoryCatererList';

function setup(history=[]) {
  const props = {
    orderHistory: history,
    onClick: () => {},
  };

  return shallow(<OrderHistoryCatererList {...props} />);
}

describe('<OrderHistoryList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows order order History', () => {
      const wrapper = setup([{meal_id: 1, meal: 'test', price: 5000, points: 50, caterer: "test caterer",}]);
      expect(wrapper.find('.cleared').text()).toBe('CLEARED');
    });

  });
});
