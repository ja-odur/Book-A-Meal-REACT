import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import OrderHistory from './OrderHistory';

function setup(showHistory=false) {
  const props = {
    showHistory: showHistory,
    onClick: () => {},
    orderHistory: [],
  };

  return shallow(<OrderHistory {...props} />);
}

describe('<OrderHistory />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(2);
    });

    test('It shows order order History', () => {
      const wrapper = setup(true);
      expect(wrapper.find('.order_history').text()).toBe('ORDER HISTORY');
    });

  });
});
