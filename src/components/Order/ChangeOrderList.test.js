import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ChangeOrderList from './ChangeOrderList';

function setup(orders=[]) {
  const props = {
    orders: orders,
    onClick: () => {},
  };

  return shallow(<ChangeOrderList {...props} />);
}

describe('<ChangeOrderList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows orders', () => {
      const wrapper = setup([{meal:'test', price: 5000, caterer: 'The Medicis'}]);
      expect(wrapper.find('.btn-danger').text()).toBe('Remove');
    });

  });
});
