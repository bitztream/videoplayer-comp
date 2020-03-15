import React from 'react';
import { shallow } from 'enzyme/build';
import VideoEntry from '../client/src/VideoEntry';
import testdata from './testdata';


describe('Unit Test', () => {
  const data = testdata.testdata[0];
  test('includes a source tag', () => {
    const wrapper = shallow(<VideoEntry video={data} />);
    expect(wrapper.find('source')).toBeDefined();
  });
  test('src for the source tag should not be empty', () => {
    const wrapper = shallow(<VideoEntry video={data} />);
    expect(wrapper.find('source.src')).toBeDefined();
    expect(wrapper.find('source.src')).not.toBe('');
  });
});
