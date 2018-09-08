import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import SideBar from './SideBar';

function setup(tabs={}) {
  const props = {
    tabs: tabs,
    onClick: () => {},
  };

  return shallow(<SideBar {...props} />);
}

describe('<SideBar />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It sets the right class to the menu tab', () => {
      const wrapper = setup({menu:true, change_order: false, order_history: false});
      expect(wrapper.find('.active').text()).toBe("Menu");
    });

    test('It sets the right class to the change_order tab', () => {
      const wrapper = setup({menu:false, change_order: true, order_history: false});
      expect(wrapper.find('.active').text()).toBe("Change Order");
    });

    test('It sets the right class to the order_history tab', () => {
      const wrapper = setup({menu:false, change_order: false, order_history: true});
      expect(wrapper.find('.active').text()).toBe("Order History");
    });

  });
});
