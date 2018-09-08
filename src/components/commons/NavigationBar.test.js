import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import NavigationBar from './NavigationBar';

function setup() {
  const props = {

  };

  return shallow(<NavigationBar {...props} />);
}

describe('<NavigationBar />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(1);
    });
  });
});
