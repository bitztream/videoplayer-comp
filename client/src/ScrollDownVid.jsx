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
  const { video } = props;
  const videoUrl = video[0].videos[0].video_url;
  return (
    <>
      <Floating title="a" src={videoUrl} />
    </>
  );
};
export default ScrollDownVidList;
