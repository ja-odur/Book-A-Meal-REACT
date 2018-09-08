import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App />);

    });
  });
});
