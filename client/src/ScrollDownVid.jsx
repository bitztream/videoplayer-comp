/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const button = styled.div`
  display:none;
  z-index:2;
  color: white;
  position: absolute;
  right: 1.2rem;
  top: 0.5rem;
  background-color: Transparent;
  border: none;
  cursor:pointer;
  outline:none;
  font-size: 14px;
  &:hover {
    font-weight: 900;
  }
`;

const Close = styled.div`
  display:none;
  z-index:2;
  color: white;
  position: absolute;
  right: 1.2rem;
  top: 0.5rem;
  background-color: Transparent;
  border: none;
  cursor:pointer;
  outline:none;
  font-size: 14px;
`;

const Floating = styled.figure`
  z-index:1;
  position: fixed;
  left: 1.0rem;
  bottom: 1.0rem;
  border-radius: 0.5rem;
  &:hover {${Close} {
    display: inline;
  }}
`;

const ScrollDownVidList = (props) => {
  const { video, closeVideo } = props;
  const videoUrl = video[0].videos[0].video_url;
  return (
    <div>
      <Floating title="a">
        <video className="video" width="250px" height="100%" controls>
          <source src={videoUrl} />
        </video>
        <Close>
          Watching
          {' '}
          {video[0].name}
          {' '}
          <button type="button" onClick={closeVideo}>  &times; </button>
          <div><a href="#target" role="button">go up;</a></div>
        </Close>
      </Floating>
    </div>
  );
};
export default ScrollDownVidList;
