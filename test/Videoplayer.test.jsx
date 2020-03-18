import React from 'react';
import { shallow } from 'enzyme/build';
import VideoPlayer from '../client/src/Videoplayer';
import testdata from './testdata';

describe('Unit Test', () => {
  const data = testdata;
  test('should render one video', () => {
    const wrapper = shallow(<VideoPlayer video={data} />);
    expect(wrapper.find('div.display')).toHaveLength(1);
    expect(wrapper.find('.display')).toBeDefined();
  });
});
