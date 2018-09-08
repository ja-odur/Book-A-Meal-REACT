import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PendingOrders from './PendingOrders';

function setup(orders=[]) {
  const props = {
    orders: orders,
    onClick: () => {},
  };

  return shallow(<PendingOrders {...props} />);
}

describe('<PendingOrders />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });
  });
});
