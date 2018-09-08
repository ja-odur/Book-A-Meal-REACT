import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Footer from './Footer';

function setup() {
  const props = {
  };

  return shallow(<Footer {...props} />);
}

describe('<Footer />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(10);
    });
  });
});
