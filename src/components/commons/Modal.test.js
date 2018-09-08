import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Modal from './Modal';

function setup() {
  const props = {
    meals: [], meal_ids: [],
    onChange: () => {},
    onClick: () => {},
  };

  return shallow(<Modal {...props} />);
}

describe('<Modal />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(7);
    });
  });
});
