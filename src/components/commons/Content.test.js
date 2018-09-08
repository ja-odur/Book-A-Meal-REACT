import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Content from './Content';

function setup() {
  const props = {
    tabs: {},
    menus: [],
    orders: [],
    trendingMeals: [],
    orderHistory: [],
    onClick: () => {}
  };

  return shallow(<Content {...props} />);
}

describe('<Content />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(3);
    });
  });
});
