import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Menu from './Menu';

function setup(showMenu=false) {
  const props = {
    showMenu: showMenu,
    onClick: () => {},
    menus: [],
  };

  return shallow(<Menu {...props} />);
}

describe('<Menu />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It shows menus', () => {
      const wrapper = setup(true);
      expect(wrapper.find('div').length).toBe(1);
    });

  });
});
