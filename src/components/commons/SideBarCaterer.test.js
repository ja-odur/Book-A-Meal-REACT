import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import SideBarCaterer from './SideBarCaterer';

function setup(tabs={}) {
  const props = {
    tabs: tabs,
    onClick: () => {},
  };

  return shallow(<SideBarCaterer {...props} />);
}

describe('<SideBar />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It sets the right class to the menu tab', () => {
      const wrapper = setup({edit_menu:true, add_meal: false});
      expect(wrapper.find('.active').text()).toBe("Edit Menu");
    });

    test('It sets the right class to the change_order tab', () => {
      const wrapper = setup({edit_menu:false, add_meal: true});
      expect(wrapper.find('.active').text()).toBe("Add Meal");
    });

  });
});
