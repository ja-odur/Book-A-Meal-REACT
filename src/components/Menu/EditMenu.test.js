import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import EditMenu from './EditMenu';

function setup(showMenu=false) {
  const props = {
    showMenu: showMenu,
    onClick: () => {},
    menu: [],
  };

  return shallow(<EditMenu {...props} />);
}

describe('<EditMenu />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });

    test('It shows menu', () => {
      const wrapper = setup(true);
      expect(wrapper.find('.caterer').text()).toBe('DAILY MENU');
    });

  });
});
