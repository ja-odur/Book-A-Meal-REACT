import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import MenuList from './MenuList';

function setup(menu=[]) {
  const props = {
    menu:menu,
    onClick: () => {},
  };

  return shallow(<MenuList {...props} />);
}

describe('<MenuList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('tbody').length).toBe(1);
    });

    test('It shows menus', () => {
      const wrapper = setup([{menu_id:1, name: "test", price: 5000,}]);
      expect(wrapper.find('.btn-danger').text()).toBe('Remove');
    });

  });
});
