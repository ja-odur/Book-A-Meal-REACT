import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import TextInput from './TextInput';

function setup(showBrandName=false, error="") {
  const props = {
    type: "", name: "", label: "",
    onChange: () => {},
    placeholder: "", value: "", error: error,
    showBrandName: showBrandName,
  };

  return shallow(<TextInput {...props} />);
}

describe('<TextInput />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = setup(true);
      expect(wrapper.find('div').length).toBe(3);
    });

    test('It shows errors', () => {
      const wrapper = setup(true, 'invalid input data');
      expect(wrapper.find('div').length).toBe(4);
    });

    test('It does not display the text input', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(3);
    });

  });
});
