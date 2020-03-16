/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
// import VideoEtnry from './VideoEntry.jsx';
const Floating = styled.iframe`
z-index:100;
position: fixed;
left:20px;
bottom:20px;
`;
const ScrollDownVidList = (props) => {

  return (
    <>
      <Floating title="a" src="https://bitztream.s3-us-west-1.amazonaws.com/cat/Lazy+Cat.mp4" />
    </>
  );
};
export default ScrollDownVidList;
