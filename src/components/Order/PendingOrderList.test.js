import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PendingOrderList from './PendingOrderList';

function setup(orders=[]) {
  const props = {
    orders: orders,
    onClick: () => {},
  };

  return shallow(<PendingOrderList {...props} />);
}

describe('<PendingOrderList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows pending orders', () => {
      const wrapper = setup([{order_id: 1, meal: 'test', price: 5000, points: 50, customer: "test caterer",}]);
      expect(wrapper.find('.btn-primary').text()).toBe('Clear Order');
    });

  });
});
