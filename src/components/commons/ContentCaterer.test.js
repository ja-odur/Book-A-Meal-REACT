import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ContentCaterer from './ContentCaterer';

function setup() {
  const props = {
    tabs: {},  mealData: {}, meals: [],
    onChange: () => {},
    onSave: () => {},
    saving: [], mealAddStatus: "", errors: [],
    onClick: () => {},
    menu: [], meal_ids: [], orders: [],
  };

  return shallow(<ContentCaterer {...props} />);
}

describe('<ContentCaterer />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(3);
    });
  });
});
