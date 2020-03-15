
import React from 'react';
import { shallow } from 'enzyme/build';
import App from '../client/src/App';
import Videoplayer from '../client/src/Videoplayer';

describe('Unit Test', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke get function on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().get = mock;
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
  test('should have Videoplayer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Videoplayer)).toHaveLength(1);
  });
});
