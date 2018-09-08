import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ChangeOrder from './ChangeOrder';

function setup(showOrder=false) {
  const props = {
    showOrder: showOrder, orders: [],
    onClick: () => {},
  };

  return shallow(<ChangeOrder {...props} />);
}

describe('<ChangeOrder />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(2);
    });

    test('It shows orders', () => {
      const wrapper = setup(true);
      expect(wrapper.find('.current_order').text()).toBe('CURRENT ORDERS');
    });

  });
});
