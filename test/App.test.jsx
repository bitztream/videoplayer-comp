
import React from 'react';
import { shallow } from 'enzyme/build';
import App from '../client/src/App';


describe('Unit Test', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
