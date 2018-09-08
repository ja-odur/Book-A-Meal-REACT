import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import MenusList from './MenusList';

function setup(menus=[]) {
  const props = {
    menus:menus,
    onClick: () => {},
  };

  return shallow(<MenusList {...props} />);
}

describe('<MenusList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(2);
    });

    test('It shows menus', () => {
      const wrapper = setup([['menu name', [{menu_id:1, name: "test", price: 5000,}]]]);
      expect(wrapper.find('.btn-primary').text()).toBe('Order');
    });

  });
});
