import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Point from './Point';

function setup(trendingMeals=[]) {
  const props = {
    trendingMeals: trendingMeals,
    onClick: () => {},
  };

  return shallow(<Point {...props} />);
}

describe('<Point />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('table').length).toBe(1);
    });
  });
});
