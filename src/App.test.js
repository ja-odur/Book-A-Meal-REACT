import Adaptor from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

Enzyme.configure({adapter: new Adaptor()});

import App from './App';

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App />);

    });
  });
});
