import React from 'react';
import { shallow } from 'enzyme/build';
import VideoPlayer from '../client/src/Videoplayer';

describe('Unit Test', () => {
  test('includes 1 div', () => {
    const wrapper = shallow(<VideoPlayer />);
    expect(wrapper.find('div.display')).toHaveLength(1);
    expect(wrapper.find('.display')).toBeDefined();
  });
});
