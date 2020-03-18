import React from 'react';
import { shallow } from 'enzyme/build';
import ChannelContainer from '../client/src/ChannelInfoComp/ChannelContainer';
import testdata from './testdata';


describe('Unit Test', () => {
  const data = testdata.testdata;
  test('should print cat as category', () => {
    const wrapper = shallow(<ChannelContainer video={data} />);
    expect(wrapper.find('div').text().includes('cat')).toBe(true);
  });
  test('should print XSS as team', () => {
    const wrapper = shallow(<ChannelContainer video={data} />);
    expect(wrapper.find('div').text().includes('XSS')).toBe(true);
  });
  test('src for the avatar img should not be empty', () => {
    const wrapper = shallow(<ChannelContainer video={data} />);
    expect(wrapper.find('img.src')).toBeDefined();
    expect(wrapper.find('img.src')).not.toBe('');
  });
});
